import "./index.scss";
export default function IconContact(props) {
  return (
    <a href={props.link} className="contanctLink" target="_blank" rel="noreferrer">
      <i className={props.icon}  />
    </a>
  );
}
