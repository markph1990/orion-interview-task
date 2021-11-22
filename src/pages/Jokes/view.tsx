import { API_CALL_ENUM } from "../../types";

import JokesList from "../../components/JokesList/view";

import { useGetJokesData } from "./hooks";
import "./style.css";

const Jokes = () => {
  const { jokes, status, toggleLikedJoke, filter, setFilter } =
    useGetJokesData();

  const renderJokes = () => {
    switch (status) {
      case API_CALL_ENUM.INITIAL:
      case API_CALL_ENUM.IN_PROGRESS:
        return "Dad jokes loading, please wait...";
      case API_CALL_ENUM.ERROR:
        return "Dad jokes not found in the dad-a-base.";
      case API_CALL_ENUM.SUCCESS:
        return (
          <JokesList
            jokes={jokes}
            toggleLikedJoke={toggleLikedJoke}
            filter={filter}
            setFilter={setFilter}
          />
        );
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
