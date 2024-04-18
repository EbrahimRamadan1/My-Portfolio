import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function EducationField(props) {
  return (
    <div className="EducationField col-12 col-lg-5">
      <FontAwesomeIcon icon={faGraduationCap} className="arrow2 col-1" />
      <div className="info col-11">
        <h4 className="col-12">{props.place}</h4>
        <h5 className="col-12">{props.date}</h5>
        <p className="col-10">{props.data}</p>
      </div>
    </div>
  );
}
