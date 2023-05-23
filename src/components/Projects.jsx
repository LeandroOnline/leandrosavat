import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Projects.css";
import projectsInfo from "../utils/projectsInfo";
import experience from "../utils/experience";
import ProjectDetail from "./ProjectDetail";

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
          <ProjectDetail search={projectsInfo} index={project} />
          <div className="row backnext">
            <button
              className="back"
              onClick={() =>
                project === 0
                  ? setProject(projectsInfo.length - 1)
                  : setProject(project - 1)
              }
            >
              Back
            </button>
            <button
              className="next"
              onClick={() =>
                project === projectsInfo.length - 1
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
