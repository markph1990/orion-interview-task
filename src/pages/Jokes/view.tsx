import JokesList from "../../components/JokesList/view";

import "./style.css";

// temporary, till we get real data from api
const jokesMock = [
  {
    id: "1",
    text: "Molestie ac, feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa, eget egestas purus viverra accumsan!",
  },
  {
    id: "2",
    text: "Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus.",
  },
  {
    id: "3",
    text: "Vulputate enim nulla aliquet porttitor lacus, luctus accumsan tortor posuere.",
  },
];

const Jokes = () => (
  <div className="page">
    <div className="container">
      <h1>Jokes List</h1>
      <JokesList jokes={jokesMock} />
    </div>
  </div>
);

export default Jokes;
