import { Joke } from "../../types";

import "./style.css";

interface OwnProps {
  jokes: Joke[];
}

const JokesList = ({ jokes }: OwnProps) => (
  <ul className="jokes">
    {jokes.map(({ text, id }) => (
      <li key={id} className="joke">
        {text}
      </li>
    ))}
  </ul>
);

export default JokesList;
