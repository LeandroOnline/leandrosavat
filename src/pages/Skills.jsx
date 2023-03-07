import { useContext } from "react";
import { context } from "../App";
import "./Skills.css";
import SkillContainer from "../components/SkillContainer";
import Language from "../components/Language";

import Carrusel from "../components/Carrusel";

function Skills() {
  const { state } = useContext(context);
  return (
    <div className={state === "Skills" ? "merge" : "separate"}>
      <div className="container">
        <div className="center-skill">
          <div className="column">
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
