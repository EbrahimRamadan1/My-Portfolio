import "./index.scss";

export default function SkillField(props) {
  const { icon, title } = props;
  return (
    <div className="skillField col-5 col-md-3 col-lg-2">
      <div className="iconCintainer col-12">
        <i className={icon}/>
      </div>
      <p>{title}</p>
    </div>
  );
}
