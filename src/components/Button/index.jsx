import {
  faCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigation = useNavigate();
  const [isHOvered, setIsHoverd] = useState(false);
  return (
    <div
      onClick={() => navigation("/About")}
      className="button"
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      style={
        isHOvered
          ? {
              backgroundColor: "#ffb400",
              color: "white",
              transition: "ease all 400ms",
            }
          : null
      }
    >
      <p>{props.title}</p>
      <FontAwesomeIcon className="arrow" icon={faCircleRight} size="2xl" />
    </div>
  );
}
