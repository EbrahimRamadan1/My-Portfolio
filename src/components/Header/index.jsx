import Icon from "../Icons/Icon";
import "./index.scss";
export default function Header() {
  // const navigate = useNavigate();
  return (
    <div className="header">
      <Icon icon="fa-solid fa-house" content="Home" to="/" id = "1"/>
      <Icon icon="fa-solid fa-user" content="About" to="/About" id = "2"/>
      <Icon icon="fa-solid fa-briefcase" content="Portfolio" to="/Portfolio" id = "3"/>
      <Icon icon="fa-solid fa-envelope" content="Contact" to="/Contact" id = "4"/>
    </div>
  );
}