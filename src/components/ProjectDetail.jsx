import internet from "../assets/icons/internet.png";
import github from "../assets/icons/github.png";

const ProjectDetail = ({search, index}) => {
  const llavei= "{";
  const llaved= "}";
  return (
    <>
      <h1 className="title">{llavei} {search[index].name} {llaved}</h1>
      <div className="links">
        <a href={search[index].web} target="_blank">
          <img className="logos" src={internet} alt="" />
        </a>
        <a href={search[index].github} target="_blank">
          <img className="logos" src={github} alt="" />
        </a>
      </div>
      <img className="imgproject" src={search[index].img}></img>
      <p className="text">{search[index].detail}</p>
    </>
  );
};
export default ProjectDetail;
