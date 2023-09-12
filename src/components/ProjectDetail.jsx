import internet from "../assets/icons/internet.png";
import github from "../assets/icons/github.png";

const ProjectDetail = ({ search, index }) => {
  const llavei = "{";
  const llaved = "}";
  return (
    <>
      <h1 className="title">
        {llavei} {search[index].name} {llaved}
      </h1>
      <div className="imgContainer">
        <img className="imgproject" src={search[index].img} />
        <p className="text">{search[index].detail}</p>
        <div className="links">
          <a className="link" href={search[index].web} target="_blank">
            <p className="text">Web</p>
            <img className="logos" src={internet} alt="" />
          </a>
          <a className="link" href={search[index].github} target="_blank">
            <p className="text">Code</p>
            <img className="logos" src={github} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};
export default ProjectDetail;
