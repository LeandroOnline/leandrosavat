import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./About.css";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/logotipo-de-linkedin.png";
import instagram from "../assets/icons/instagram.png";

function About() {
  const { state } = useContext(context);
  return (
    <div className={state === "About" ? "merge" : "separate"}>
      <div className="container">
        <div className="centerAbout">
          <div className="column">
            <div className="about-icon">
              <a href="https://github.com/LeandroOnline" target="_blank">
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandrosavat/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/leasavat/" target="_blank">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="about-data">data</div>
          </div>
          <div className="column">
            <div className="about-resume">resume</div>
            <button className="cv">descargar Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
