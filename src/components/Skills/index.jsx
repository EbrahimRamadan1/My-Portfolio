import "./index.scss";
import jsonSkills from "../../skills.json";
import SkillField from "../SkillField";

export default function Skills() {
  return (
    <div className="skills col-12">
      <h3 className="col-12">My Skills</h3>
      {jsonSkills.map((el) => {
        return <SkillField key={el.id} icon={el.icon} title={el.title} />;
      })}
    </div>
  );
}
