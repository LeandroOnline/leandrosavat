import driven from "../utils/driven";
import aboutTexts from "../utils/aboutTexts";


const Driven = () => {
  const datatitle = "{ Driven }";

  return (
    <div className="about-data">
      <p className="title">{datatitle}</p>
      <div className="row wrap">
        {driven.map((drive, key) => (
          <img className="interest" src={drive} alt="" key={key} />
        ))}
      </div>
      <p className="text">{aboutTexts[0]}</p>
    </div>
  );
};
export default Driven;
