import "./index.scss";
import { useState } from "react";

export default function Hover(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="hover-box"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <div>{props.name}</div>}
    </div>
  );
}
