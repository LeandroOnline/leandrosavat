import { useContext, useState } from "react";
import { context } from "../App";
import projectsInfo from "../utils/projectsInfo";
import { experienceEnglish, experienceSpanish } from "../utils/experience";
import { ProjectDetail } from "../components";
import "../Merge.css";
import "./Experience.css";

function Project() {
  const { state, translate } = useContext(context);
  const [project, setProject] = useState(0);
  const experience = translate ? experienceSpanish : experienceEnglish;
  return (
    <div
      className={state === "Experience" ? "merge" : "separate"}
      id="experience"
    >
      <div className="container containerdirection">
        <div className="exp">
          {experience?.map((exp, key) => (
            <div className="job fade-up" key={key}>
              <p className="titleexp fade-up">{exp.title}</p>
              <p className="text fade-up">✦ {exp.since}</p>
              <p className="text fade-up">✧ {exp.subtitle}</p>
              <p className="text fade-up">✧ {exp.details}</p>
            </div>
          ))}
        </div>

        <div className="centerprojects">
          <ProjectDetail search={projectsInfo} index={project} />
          <div
            className="row"
          >
            <button
              className="back"
              onClick={() =>
                project === 0
                  ? setProject(projectsInfo.length - 1)
                  : setProject(project - 1)
              }
            >
              〈
            </button>
            <button
              className="next"
              onClick={() =>
                project === projectsInfo.length - 1
                  ? setProject(0)
                  : setProject(project + 1)
              }
            >
              〉
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
