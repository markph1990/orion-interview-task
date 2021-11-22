import { useEffect, useState, useCallback, useMemo } from "react";

import { getJokes } from "../../api/jokes";
import { API_CALL_ENUM, Joke, LikedJoke, JOKES_FILTER } from "../../types";

export const useGetJokesData = () => {
  const [status, setStatus] = useState(API_CALL_ENUM.INITIAL);
  const [jokesData, setJokesData] = useState<Joke[]>([]);
  // TODO
  // make it more persistent, by keeping it in local storage
  // also keep it in data structure where retrieving individual element
  // takes constant time and it's api is immutable (not like for example native Set)
  const [likedJokesId, setLikedJokesId] = useState<LikedJoke[]>([]);
  const [filter, setFilter] = useState<JOKES_FILTER>(JOKES_FILTER.ALL);

  const jokes = useMemo(() => {
    switch (filter) {
      case JOKES_FILTER.ALL:
        return jokesData;
      case JOKES_FILTER.LIKED:
        // we have to reduce, instead of map, over it due to how search for liked joke works
        // (via find) which might return undefined which we don't want in our final result
        return likedJokesId.reduce<Joke[]>((accum, likedJokeId) => {
          const foundJoke = jokesData.find(({ id }) => likedJokeId === id);
          return foundJoke ? [...accum, foundJoke] : accum;
        }, []);
    }
  }, [jokesData, likedJokesId, filter]);

  const toggleLikedJoke = useCallback(
    (id: LikedJoke) => {
      const isJokeLiked = likedJokesId.some((jokeId) => jokeId === id);
      if (isJokeLiked) {
        setLikedJokesId((jokes) => jokes.filter((jokeId) => jokeId !== id));
      } else {
        setLikedJokesId((jokes) => [...jokes, id]);
      }
    },
    [likedJokesId, setLikedJokesId]
  );

  useEffect(() => {
    setStatus(API_CALL_ENUM.IN_PROGRESS);
    getJokes()
      .then((jokes) => {
        setStatus(API_CALL_ENUM.SUCCESS);
        setJokesData(jokes);
      })
      .catch(() => {
        setStatus(API_CALL_ENUM.ERROR);
      });
  }, []);

  return { jokes, status, toggleLikedJoke, filter, setFilter };
};
