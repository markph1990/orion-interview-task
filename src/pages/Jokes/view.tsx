import JokesList from "../../components/JokesList/view";

import { useGetJokesData } from "./hooks";
import "./style.css";

const Jokes = () => {
  const { jokes } = useGetJokesData();

  return (
    <div className="page">
      <div className="container">
        <h1>Jokes List</h1>
        <JokesList jokes={jokes} />
      </div>
    </div>
  );
};

export default Jokes;
