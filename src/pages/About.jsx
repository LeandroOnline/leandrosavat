import { useContext } from "react";
import nube from "../assets/images/nube.png";
import cven from "../assets/doc/CV EN-ES.pdf";
import { moreEnglish, moreSpanish } from "../utils/aboutTexts";
import { context } from "../App";
import "../Merge.css";
import "./About.css";
import * as components from "../components";

function About() {
  const { state, translate } = useContext(context);

  return (
    <div className={state === "About" ? "merge" : "separate"} id="about">
      <div className="container center">
        <div className="centerAbout">
          <div className="column center">
            <components.Networks />
            <components.Driven />
          </div>
          <div className="column center">
            <components.AboutMe />
            <a className="cv" href={cven} download="Leandro Savat Resume">
              <img className="download-icon" src={nube} alt="" />{" "}
              {translate ? moreSpanish[3] : moreEnglish[3]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
