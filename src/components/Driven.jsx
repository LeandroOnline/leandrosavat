import driven from "../utils/driven";
import { moreEnglish, moreSpanish } from "../utils/aboutTexts";
import { useContext } from "react";
import { context } from "../App";

const Driven = () => {
  const { translate } = useContext(context);
  const datatitle = translate ? "{ SobreMI }" : "{ AboutME }";

  return (
    <div className="about-data">
      <p className="title">{datatitle}</p>
      <div className="row wrap">
        {driven.map((drive, key) => (
          <img className="interest" src={drive} alt="" key={key} />
        ))}
      </div>
      <p className="text">{translate ? moreSpanish[0] : moreEnglish[0]}</p>
    </div>
  );
};
export default Driven;
