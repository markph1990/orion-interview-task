import { Joke, LikedJoke, JOKES_FILTER } from "../../types";

import Like from "../Like/view";

import "./style.css";

interface OwnProps {
  jokes: Joke[];
  toggleLikedJoke: (id: LikedJoke) => void;
  filter: JOKES_FILTER;
  setFilter: (filter: JOKES_FILTER) => void;
}

const JokesList = ({ jokes, toggleLikedJoke, filter, setFilter }: OwnProps) => {
  return (
    <div>
      <div>
        <input
          name="liked"
          type="radio"
          value="liked"
          onChange={() => setFilter(JOKES_FILTER.LIKED)}
          checked={filter === JOKES_FILTER.LIKED}
        />
        <label htmlFor="liked">Liked</label>
        <input
          name="all"
          type="radio"
          value="all"
          onChange={() => setFilter(JOKES_FILTER.ALL)}
          checked={filter === JOKES_FILTER.ALL}
        />
        <label htmlFor="all">All</label>
      </div>

      <ul className="jokes">
        {jokes.map(({ id, joke }) => (
          <li key={id} className="joke">
            <p>{joke}</p>
            <Like handleClick={() => toggleLikedJoke(id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JokesList;
