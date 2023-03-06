import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./About.css";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/logotipo-de-linkedin.png";
import instagram from "../assets/icons/instagram.png";
import about from "../assets/investigacion.png";
import leer from "../assets/leer.png";
import flechaizq from "../assets/flecha-izquierda.png";
import flechader from "../assets/flecha-derecha.png";
import yoga from "../assets/yoga.png";
import nube from "../assets/nube.png";
import cven from '../assets/CV-EN.pdf'

function About() {
  const { state } = useContext(context);
  const [more, setMore] = useState(false);
  const datatitle = "{ Personal Information }";
  const resumetitle = "{ AboutME }";

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
            <div className="about-data">
              <p className="title">{datatitle}</p>
              <img src={about} alt="" />
              <p>leandrosavat@gmail.com</p>
              <p>+5493435267411</p>
              <p>20-35295349-1</p>
            </div>
          </div>
          <div className="column">
            <div className={!more ? "about-resume" : "about-resume-out"}>
              <div className={!more ? "inforesume" : "inforesume-out"}>
                <p className="title">{resumetitle}</p>
                <img className="leerimg" src={leer} alt="" />
                <p>
                  +800 hours of programming in practices and studies.
                  Organization and development of technology with Scrum
                  methodology. Performance with integrity and work commitment.
                  With the support of a big professional community. Problem
                  solving and self-taught learning.
                </p>
              </div>
              <img
                className={!more ? "flecha" : "flecha-izq"}
                src={!more ? flechaizq : flechader}
                alt=""
                onClick={() => setMore(!more)}
              />
              {more ? (
                <div className="more">
                  <p>
                    Since I was 11 years old I have been working in my family
                    business of audiovisual productions, where I developed a
                    solid professional ethic and work commitment. I traveled for
                    two years, making productions and acquiring English skills.
                    During the trip, I met programmers who sparked my interest
                    in coordinated work and web connection to the world. In
                    2021, I became interested in financial data programming
                    which led me to learn about and focus on web programming.
                  </p>
                  <img className="leerimg" src={yoga} alt="" />
                </div>
              ) : null}
            </div>
            <a className="cv" href={cven} download="Leandro Savat Resume">
              <img className="download-icon" src={nube} alt=""/> Download
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
