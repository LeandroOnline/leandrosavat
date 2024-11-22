import "./Nav.css";
import iHome from "../assets/icons/home.png";
import iAbout from "../assets/icons/information.png";
import iSkills from "../assets/icons/capability.png";
import iProject from "../assets/icons/puesta-en-marcha.png";
import iTraducir from "../assets/icons/traducir.png";
import iTraducircopy from "../assets/icons/traducircopy.png";
import { useContext } from "react";
import { context } from "../App";

function Nav() {
  const { state, setState, translate, setTranslate } = useContext(context);
  return (
    <nav className="nav">
      <a href="#home">
        <button
          autoFocus={true}
          className={state === "Home" ? "buttonfocus" : "button"}
        >
          <img src={iHome} alt="" />
          <p className="menutext" onClick={() => setState("Home")}>
            {translate ? "Inicio" : "Home"}
          </p>
        </button>
      </a>

      <a href="#experience">
        <button className={state === "Experience" ? "buttonfocus" : "button"}>
          <img src={iProject} alt="" />
          <p className="menutext" onClick={() => setState("Experience")}>
            {translate ? "Experiencia" : "Experience"}
          </p>
        </button>
      </a>
      <a href="#education">
        <button className={state === "Education" ? "buttonfocus" : "button"}>
          <img src={iSkills} alt="" />
          <p className="menutext" onClick={() => setState("Education")}>
            {translate ? "Educacion" : "Education"}
          </p>
        </button>
      </a>
      <a href="#about">
        <button className={state === "About" ? "buttonfocus" : "button"}>
          <img src={iAbout} alt="" />
          <p className="menutext" onClick={() => setState("About")}>
            {translate ? "Más" : "More"}
          </p>
        </button>
      </a>
      <p className="buttonesen">
        <img
          src={translate ? iTraducir : iTraducircopy}
          alt="ES/EN"
          onClick={() => setTranslate(!translate)}
        />
      </p>
    </nav>
  );
}
export default Nav;
