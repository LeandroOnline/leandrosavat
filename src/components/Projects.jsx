import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Projects.css";
import internet from "../assets/icons/internet.png";
import github from "../assets/icons/github.png";
import clic from "../assets/icons/clic.png";
import projects from "../utils/projects";
import experience from "../utils/experience";

function Project() {
  const { state } = useContext(context);
  const [project, setProject] = useState(0);

  return (
    <div className={state === "Project" ? "merge" : "separate"}>
      <div className="container row">

        <div className="exp">
          {experience.map((exp, key) => (
            <div className="column job" key={key}>
              <p className="titleexp">{exp.title}</p>
              <p className="text">{exp.subtitle}</p>
              <p className="text">{exp.details}</p>
            </div>
          ))}
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
