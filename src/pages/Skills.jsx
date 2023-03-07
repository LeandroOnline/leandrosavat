import { useContext } from "react";
import { context } from "../App";
import "./Merge.css"; // where take the container, for everyone the same
import "./Skills.css";

function Skills() {
  const { state } = useContext(context);
  return (
    <div className={state === "Skills" ? "merge" : "separate"}>
      <div className="container">
        <div className="center-skill">
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
          <div className="skill-container">skill</div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
