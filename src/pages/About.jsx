import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./About.css";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/logotipo-de-linkedin.png";
import instagram from "../assets/icons/instagram.png";
import about from "../assets/images/investigacion.png";
import leer from "../assets/images/leer.png";
import flechaizq from "../assets/images/flecha-izquierda.png";
import flechader from "../assets/images/flecha-derecha.png";
import yoga from "../assets/images/yoga.png";
import nube from "../assets/images/nube.png";
import cven from "../assets/doc/CV EN-ES.pdf";

import dieta from "../assets/interest/dieta.png";
import kayak from "../assets/interest/kayak.png";
import meditacion from "../assets/interest/meditacion.png";
import paisaje from "../assets/interest/paisaje.png";
import personas from "../assets/interest/personas.png";
import escribir from "../assets/interest/escribir.png";

function About() {
  const { state } = useContext(context);
  const [more, setMore] = useState(false);
  const datatitle = "{ Motivation }";
  const resumetitle = "{ AboutME }";

  return (
    <div className={state === "About" ? "merge" : "separate"}>
      <div className="container center">
        <div className="centerAbout">
          <div className="column center">
            <div className="about-icon">
              <img src={about} alt="" />
              <a href="https://github.com/LeandroOnline" target="_blank">
                <img className="aboutimg" src={github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandrosavat/"
                target="_blank"
              >
                <img className="aboutimg" src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/leasavat/" target="_blank">
                <img className="aboutimg" src={instagram} alt="" />
              </a>
            </div>
            <div className="about-data">
              <p className="title">{datatitle}</p>
              <div className="row wrap">
                <img className="interest" src={dieta} alt="" />
                <img className="interest" src={escribir} alt="" />
                <img className="interest" src={kayak} alt="" />
                <img className="interest" src={meditacion} alt="" />
                <img className="interest" src={paisaje} alt="" />
                <img className="interest" src={personas} alt="" />
              </div>
              <p className="text">
                I am motivated by the ability to provide solutions and help
                humanity through my software, it is an opportunity to solve
                frequent problems and optimize business processes. As a web
                developer, I have the ability to make a significant difference
                by contributing my skills and knowledge online.
              </p>
            </div>
          </div>
          <div className="column center">
            <div className={!more ? "about-resume" : "about-resume-out"}>
              <div className={!more ? "inforesume" : "inforesume-out"}>
                <p className="title">{resumetitle}</p>
                <img className="leerimg" src={leer} alt="" />
                <p className="text">
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
                  <p className="text">
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
              <img className="download-icon" src={nube} alt="" /> Download
              Resume EN/ES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
