import { useEffect, useState } from "react";

import { getJokes } from "../../api/jokes";
import { API_CALL_ENUM, Joke } from "../../types";

export const useGetJokesData = () => {
  const [status, setStatus] = useState(API_CALL_ENUM.INITIAL);
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    setStatus(API_CALL_ENUM.IN_PROGRESS);
    getJokes()
      .then((jokes) => {
        setStatus(API_CALL_ENUM.SUCCESS);
        setJokes(jokes);
      })
      .catch(() => {
        setStatus(API_CALL_ENUM.ERROR);
      });
  }, []);

  return { jokes, status };
};
