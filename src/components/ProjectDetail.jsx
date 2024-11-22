import internet from "../assets/icons/internet.png";
import github from "../assets/icons/github.png";

const ProjectDetail = ({ search, index }) => {
  return (
    <>
      <h1 className="title">
        {"{"} {search[index].name} {"}"}
      </h1>
      <div className="imgContainer zoom">
        <img className="imgproject" src={search[index].img} />
        <p className="text m2">{search[index].detail}</p>
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
