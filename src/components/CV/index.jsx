import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Button(props) {
  const navigation = useNavigate();
  const [isHOvered, setIsHoverd] = useState(false);
  return (
    <>
      <div
        onClick={() => navigation("/About")}
        className="button2"
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
        <a
          href="/Ebrahim Ramadan Ebrahim CV.pdf"
          download="Ebrahim Ramadan Ebrahim CV.pdf"
        >
          Download CV
        </a>
        <i className="iconButton fa-solid fa-circle-down"></i>
      </div>
    </>
  );
}
