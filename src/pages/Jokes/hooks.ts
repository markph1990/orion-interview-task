import { useEffect, useState } from "react";

import { getJokes } from "../../api/jokes";
import { Joke } from "../../types";

export const useGetJokesData = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    getJokes().then((jokes) => {
      setJokes(jokes);
    });
  }, []);

  return { jokes };
};
