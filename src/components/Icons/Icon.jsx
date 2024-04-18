import { NavLink } from "react-router-dom";
import "./Icon.scss";

export default function Icon(props) {
  const { icon, content } = props;
  return (
    <NavLink to={props.to} className="icon col-12">
      <p className="col-8  animate__animated animate__fadeInRight">{content}</p>
      <i className={icon} />
    </NavLink>
  );
}
