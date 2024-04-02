import Icon from "../Icons/Icon";
import "./index.scss";
// import {
//   faBriefcase,
//   faHouse,
//   faUser,
//   faEnvelopeOpen,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import Hover from "../Hover/index ";
// import { useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Icon iconName = "faHouse"/>

      {/* <Link to="/">
        <Hover name="Home">
          <FontAwesomeIcon className="iconClass" icon={faHouse} />
        </Hover>
      </Link>
      <Link to="/About">
        <FontAwesomeIcon className="iconClass" icon={faUser} />
      </Link>
      <Link to="/Portfolio">
        <FontAwesomeIcon className="iconClass" icon={faBriefcase} />
      </Link>
      <Link to="/Contact">
        <FontAwesomeIcon className="iconClass" icon={faEnvelopeOpen} />
      </Link> */}
    </div>
  );
}
