import { Joke } from "../../types";

interface OwnProps {
  jokes: Joke[];
}

const JokesList = ({ jokes }: OwnProps) => (
  <ul>
    {jokes.map(({ text }) => (
      <li>{text}</li>
    ))}
  </ul>
);

export default JokesList;
