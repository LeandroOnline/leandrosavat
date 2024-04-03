import { useContext } from "react";
import { context } from "../App";
import "./Education.css";
import * as components from "../components";

function Skills() {
  const { state } = useContext(context);
  return (
    <div
      className={state === "Education" ? "merge" : "separate"}
      id="education"
    >
      <div className="container">
        <div className="center-skill">
          <div className="column center">
            <components.SkillContainer />
            <components.Language />
          </div>
          <components.Carrusel />
        </div>
      </div>
    </div>
  );
}
export default Skills;
