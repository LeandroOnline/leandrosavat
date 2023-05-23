import done from "../assets/icons/done.png";
import skills from "../utils/skills";
import "./SkillContainer.css";

function SkillContainer() {
  return (
    <div className="skill-container">
      {skills?.map((skill, key) => (
        <div className="skill-item" key={key}>
          <img className="done" src={done} alt="" />
          <p className="text">{Object.keys(skill)}</p>
          <img className="icon" src={Object.values(skill)} alt="" />
        </div>
      ))}
    </div>
  );
}
export default SkillContainer;
