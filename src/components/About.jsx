import { useContext } from "react";
import { context } from "../App";
import nube from "../assets/images/nube.png";
import cven from "../assets/doc/CV EN-ES.pdf";
import { moreEnglish, moreSpanish } from "../utils/aboutTexts";
import Networks from "./Networks";
import Driven from "./Driven";
import AboutMe from "./AboutMe";
import "./Merge.css";
import "./About.css";

function About() {
  const { state, translate } = useContext(context);

  return (
    <div className={state === "About" ? "merge" : "separate"}>
      <div className="container center">
        <div className="centerAbout">
          <div className="column center">
            <Networks />
            <Driven />
          </div>
          <div className="column center">
            <AboutMe />
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
