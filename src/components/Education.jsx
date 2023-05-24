import { useContext } from "react";
import { context } from "../App";
import "./Education.css";
import SkillContainer from "./SkillContainer";
import Language from "./Language";

import Carrusel from "./Carrusel";

function Skills() {
  const { state } = useContext(context);
  return (
    <div className={state === "Skills" ? "merge" : "separate"}>
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
