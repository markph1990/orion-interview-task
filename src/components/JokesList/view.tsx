import { Joke } from "../../types";

import Like from "../Like/view";

import "./style.css";

interface OwnProps {
  jokes: Joke[];
}

const JokesList = ({ jokes }: OwnProps) => (
  <ul className="jokes">
    {jokes.map(({ id, joke }) => (
      <li key={id} className="joke">
        <p>{joke}</p>
        <Like handleClick={() => {}} />
      </li>
    ))}
  </ul>
);

export default JokesList;
