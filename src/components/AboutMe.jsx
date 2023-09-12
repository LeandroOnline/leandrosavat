import { useContext, useState } from "react";
import leer from "../assets/images/leer.png";
import rompecabeza from "../assets/images/rompecabezas.png";
import flechaizq from "../assets/images/flecha-izquierda.png";
import flechader from "../assets/images/flecha-derecha.png";
import { moreEnglish, moreSpanish } from "../utils/aboutTexts";
import { context } from "../App";

const AboutMe = () => {
  const [more, setMore] = useState(false);
  const { translate } = useContext(context);
  const resumetitle = translate ? "{ Mi sueño }" : "{ My dream }";
  const heart = translate ? "{ Mi pasion }" : "{ My passion }";

  return (
    <div className={!more ? "about-resume" : "about-resume-out"}>
      <div className={!more ? "inforesume" : "inforesume-out"}>
        <p className="title">{resumetitle}</p>
        <img className="leerimg" src={leer} alt="" />
        <p className="text">{translate ? moreSpanish[1] : moreEnglish[1]}</p>
      </div>
      <img
        className={!more ? "flecha" : "flecha-izq"}
        src={!more ? flechaizq : flechader}
        alt=""
        onClick={() => setMore(!more)}
      />
      {more ? (
        <div className={more ? "more" : "nomore"}>
          <p className="title">{heart}</p>
          <img className="leerimg" src={rompecabeza} alt="" />
          <p className="text">{translate ? moreSpanish[2] : moreEnglish[2]}</p>
        </div>
      ) : null}
    </div>
  );
};

export default AboutMe;
