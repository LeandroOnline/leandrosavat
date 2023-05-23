import internet from "../assets/icons/internet.png";
import github from "../assets/icons/github.png";
import "./Projects.css";

const ProjectDetail = ({search, index}) => {
  return (
    <>
      <h1 className="title">{search[index].name}</h1>
      <p className="text">{search[index].detail}</p>
      <div className="links">
        <a href={search[index].web} target="_blank">
          <img className="logos" src={internet} alt="" />
        </a>
        <a href={search[index].github} target="_blank">
          <img className="logos" src={github} alt="" />
        </a>
      </div>
      <img className="imgproject" src={search[index].img}></img>
    </>
  );
};
export default ProjectDetail;
