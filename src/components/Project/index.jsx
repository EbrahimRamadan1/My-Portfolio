import { useState } from "react";
import "./index.scss";

export default function Project(props) {
  const [isHOvered, setIsHoverd] = useState(false);

  return (
    <div className="project col-4">
      <div className="row col-12">
        <i className="fa-solid fa-file-signature col-1 arrow2"></i>
        <h5 className="col-10">
          <span className="projecSpan">Project:</span> {props.name}
        </h5>
      </div>

      <div className="row col-12 arrow2">
        <i className="fa-solid fa-pen-nib col-1 arrow2"></i>
        <p className="col-10">
          {" "}
          <span className="projecSpan">Descrition:</span> {props.discription}
        </p>
      </div>

      <div className="row col-12">
        <i className="fa-solid fa-code col-1 arrow2"></i>
        <p className="col-11">
          <span className="projecSpan">Languages:</span> {props.languages}
        </p>
      </div>

      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
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
        Preview
        <i
          className="fa-solid fa-up-right-from-square arrow2"
          style={
            isHOvered
              ? {
                  color: "white",
                  transition: "ease all 400ms",
                }
              : null
          }
        />
      </a>
    </div>
  );
}
