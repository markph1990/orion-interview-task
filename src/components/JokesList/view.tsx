import { Joke, LikedJoke } from "../../types";

import Like from "../Like/view";

import "./style.css";

interface OwnProps {
  jokes: Joke[];
  toggleLikedJoke: (id: LikedJoke) => void;
}

const JokesList = ({ jokes, toggleLikedJoke }: OwnProps) => (
  <ul className="jokes">
    {jokes.map(({ id, joke }) => (
      <li key={id} className="joke">
        <p>{joke}</p>
        <Like handleClick={() => toggleLikedJoke(id)} />
      </li>
    ))}
  </ul>
);

export default JokesList;
