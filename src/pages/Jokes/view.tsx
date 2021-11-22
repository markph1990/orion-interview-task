import { useState, useCallback } from "react";

import { API_CALL_ENUM, LikedJoke } from "../../types";

import JokesList from "../../components/JokesList/view";

import { useGetJokesData } from "./hooks";
import "./style.css";

const Jokes = () => {
  const { jokes, status } = useGetJokesData();
  // TODO
  // make it more persistent, by keeping it in local storage
  const [likedJokes, setLikedJokes] = useState<LikedJoke[]>([]);
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

  const renderJokes = () => {
    switch (status) {
      case API_CALL_ENUM.INITIAL:
      case API_CALL_ENUM.IN_PROGRESS:
        return "Dad jokes loading, pleas wait...";
      case API_CALL_ENUM.ERROR:
        return "Dad jokes not found in the dad-a-base.";
      case API_CALL_ENUM.SUCCESS:
        return <JokesList jokes={jokes} toggleLikedJoke={toggleLikedJoke} />;
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Jokes List</h1>
        {renderJokes()}
      </div>
    </div>
  );
};

export default Jokes;
