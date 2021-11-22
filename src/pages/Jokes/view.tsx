import { Joke } from "../../types";

import JokesList from "../../components/JokesList/view";

import "./style.css";

// temporary, till we get real data from api
const jokesMock = [{ text: "joke 1" }, { text: "joke 2" }, { text: "joke 3" }];

const Jokes = () => (
  <div className="page">
    <div className="container">
      <h1>Jokes List</h1>
      <JokesList jokes={jokesMock} />
    </div>
  </div>
);

export default Jokes;
