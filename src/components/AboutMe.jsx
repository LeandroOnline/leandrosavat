import { useState } from "react";
import leer from "../assets/images/leer.png";
import flechaizq from "../assets/images/flecha-izquierda.png";
import flechader from "../assets/images/flecha-derecha.png";
import yoga from "../assets/images/yoga.png";
import aboutTexts from "../utils/aboutTexts";

const AboutMe = () => {
  const [more, setMore] = useState(false);
  const resumetitle = "{ AboutME }";
  return (
    <div className={!more ? "about-resume" : "about-resume-out"}>
      <div className={!more ? "inforesume" : "inforesume-out"}>
        <p className="title">{resumetitle}</p>
        <img className="leerimg" src={leer} alt="" />
        <p className="text">{aboutTexts[1]}</p>
      </div>
      <img
        className={!more ? "flecha" : "flecha-izq"}
        src={!more ? flechaizq : flechader}
        alt=""
        onClick={() => setMore(!more)}
      />
      {more ? (
        <div className={more ? "more" : "nomore"}>
          <p className="text">{aboutTexts[2]}</p>
          <p className="text">{aboutTexts[3]}</p>
          <p className="text">{aboutTexts[4]}</p>
          <img className="leerimg" src={yoga} alt="" />
        </div>
      ) : null}
    </div>
  );
};
export default AboutMe;
