import { Joke } from "../../types";

import "./style.css";

interface OwnProps {
  jokes: Joke[];
}

const JokesList = ({ jokes }: OwnProps) => (
  <ul className="jokes">
    {jokes.map(({ id, joke }) => (
      <li key={id} className="joke">
        {joke}
      </li>
    ))}
  </ul>
);

export default JokesList;
