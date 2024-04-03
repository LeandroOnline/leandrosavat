import { useContext } from "react";
import { context } from "../App";
import "./Education.css";
import SkillContainer from "../components/SkillContainer";
import Language from "../components/Language";
import Carrusel from "../components/Carrusel";

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
            <SkillContainer />
            <Language />
          </div>
          <Carrusel />
        </div>
      </div>
    </div>
  );
}
export default Skills;
