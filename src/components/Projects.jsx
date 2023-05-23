import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Projects.css";

// Backgrounds https://app.haikei.app

import internet from "../assets/icons/internet.png";
import github from "../assets/icons/github.png";
import clic from "../assets/icons/clic.png";

import projects from "../utils/projects";

function Project() {
  const { state } = useContext(context);
  const [project, setProject] = useState(0);

  return (
    <div className={state === "Project" ? "merge" : "separate"}>
      <div className="container row">
        <div className="exp">
          
          <div className="column job">
            <p className="titleexp">FREELANCE</p>
            <p className="text">Web Productions - Since Dec 2022</p>
            <p className="text">
              Sale and production of personalized web pages
            </p>
          </div>

          <div className="column job">
            <a
              href="https://leandrosavat.notion.site/DevPure-3529614661e8492c8a620c383cf177f4"
              target="_blank"
            >
              <p className="titleexp">STUDY ADVISOR</p>
            </a>
            <p className="text">at DevPure learning platform- Since Oct 2022</p>
            <p className="text">
              I improved academic performance by supporting study guides and
              doubts resolution.
            </p>
          </div>

          <div className="column job">
            <a
              href="https://www.instagram.com/savatproducciones/"
              target="_blank"
            >
              <p className="titleexp">CO-FOUNDER</p>
            </a>
            <p className="text">
              at SAVAT Audiovisual Productions - Since 2008
            </p>
            <p className="text">Photography, Image design.</p>
          </div>

          <div className="column job">
            <p className="titleexp">FREELANCE</p>
            <p className="text">
              Indicator Developer at TradingView - Jan-Nov 2022
            </p>
            <p className="text">
              Programming of private indicators with financial data.
            </p>
          </div>
        </div>

        <div className="centerprojects">
          <h1 className="title">{projects[project].name}</h1>

          <p className="text">{projects[project].detail}</p>
          <div className="links">
            <a href={projects[project].web} target="_blank">
              <img className="logos" src={internet} alt="" />
            </a>
            <a href={projects[project].github} target="_blank">
              <img className="logos" src={github} alt="" />
            </a>
          </div>

          <img className="imgproject" src={projects[project].img}></img>

          <div className="desk-container">
            <div className="desk">
              <img className="clic" src={clic} alt="" />
              <iframe
                src={projects[project].web}
                className="imgproject-desk"
              ></iframe>
            </div>
          </div>

          <div className="row backnext">
            <button
              className="back"
              onClick={() =>
                project === 0
                  ? setProject(projects.length - 1)
                  : setProject(project - 1)
              }
            >
              Back
            </button>
            <button
              className="next"
              onClick={() =>
                project === projects.length - 1
                  ? setProject(0)
                  : setProject(project + 1)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
