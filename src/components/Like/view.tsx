import thumbsup from "./thumbsup.png";

import "./style.css";

interface OwnProps {
  handleClick: () => void;
}

const Like = ({ handleClick }: OwnProps) => (
  <button className="button" onClick={handleClick}>
    <img alt="Like" src={thumbsup} />
  </button>
);

export default Like;
