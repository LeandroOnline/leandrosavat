import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Projects.css";

// Backgrounds https://app.haikei.app
import jusmovies from "../assets/images/justmovies.png";
import innovation from "../assets/images/innovation.png";
import news from "../assets/images/news.png";
import traveling from "../assets/images/traveling.png";
import web from "../assets/icons/web.png";
import github from "../assets/icons/github.png";

const projects = [
  {
    name: "JustMovies",
    img: jusmovies,
    github: "https://github.com/LeandroOnline/peliculas-react",
    web: "https://peliculas-react-opal.vercel.app/",
    detail: "A movie search engine that provides information (React + HTML + CSS + JS)",
  },
  {
    name: "Traveling",
    img: traveling,
    github: "https://github.com/LeandroOnline/travel-react",
    web: "https://travel-react-flax.vercel.app/",
    detail: "A travel consultancy (React + HTML + JS + CSS)",
  },
  {
    name: "News",
    img: news,
    github: "https://github.com/LeandroOnline/BLOG_UI_TEMPLATE",
    web: "https://blog-ui-template.vercel.app/",
    detail: "A news blog, updated daily via API (React + JS + CSS + Scrum)",
  },
  {
    name: "Innovation",
    img: innovation,
    github: "https://github.com/LeandroOnline/innovation",
    web: "https://innovation-pied.vercel.app/",
    detail: "Corporate landing page (React + JS + Figma + Styled Components + Scrum)",
  },
];

function Project() {
  const { state } = useContext(context);
  const [project, setProject] = useState(0);

  return (
    <div className={state === "Project" ? "merge" : "separate"}>
      <div className="container row">
        <div className="exp">
          <div className="column job">
            <p className="titleexp">FREELANCE</p>{" "}
            <p className="text">Web Productions - Since Dec 2022</p>
            <p className="text">
              Sale and production of personalized web pages
            </p>
          </div>

          <div className="column job">
            <p className="titleexp">STUDY ADVISOR</p>{" "}
            <p className="text">at DevBess Academic Group- Since Oct 2022</p>
            <p className="text">
              I improved academic performance by supporting study guides and
              doubts resolution.
            </p>
          </div>

          <div className="column job">
            <p className="titleexp">CO-FOUNDER</p>{" "}
            <p className="text">
              at SAVAT Audiovisual Productions - Since 2008
            </p>
            <p className="text">Photography, Image design.</p>
          </div>

          <div className="column job">
            <p className="titleexp">FREELANCE</p>{" "}
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
                <img className="logos" src={web} alt="" />
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
                  project === 0 ? setProject(3) : setProject(project - 1)
                }
              >
                Back
              </button>
              <button
                className="next"
                onClick={() =>
                  project === 3 ? setProject(0) : setProject(project + 1)
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
