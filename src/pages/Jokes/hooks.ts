import { useEffect, useState, useCallback } from "react";

import { getJokes } from "../../api/jokes";
import { API_CALL_ENUM, Joke, LikedJoke, JOKES_FILTER } from "../../types";

export const useGetJokesData = () => {
  const [status, setStatus] = useState(API_CALL_ENUM.INITIAL);
  const [jokes, setJokes] = useState<Joke[]>([]);
  // TODO
  // make it more persistent, by keeping it in local storage
  const [likedJokes, setLikedJokes] = useState<LikedJoke[]>([]);
  const [filter, setFilter] = useState<JOKES_FILTER>(JOKES_FILTER.ALL);

  const toggleLikedJoke = useCallback(
    (id: LikedJoke) => {
      const isJokeLiked = likedJokes.some((jokeId) => jokeId === id);
      if (isJokeLiked) {
        setLikedJokes((jokes) => jokes.filter((jokeId) => jokeId !== id));
      } else {
        setLikedJokes((jokes) => [...jokes, id]);
      }
    },
    [likedJokes, setLikedJokes]
  );

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

  return { jokes, status, toggleLikedJoke, filter, setFilter };
};
