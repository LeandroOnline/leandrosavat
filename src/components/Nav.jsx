import "./Nav.css";
import iHome from "../assets/icons/home.png";
import iAbout from "../assets/icons/information.png";
import iSkills from "../assets/icons/capability.png";
import iContact from "../assets/icons/chat.png";
import iProject from "../assets/icons/puesta-en-marcha.png";
import iTraducir from "../assets/icons/traducir.png";
import iTraducircopy from "../assets/icons/traducircopy.png";
import { useContext } from "react";
import { context } from "../App";

function Nav() {
  const { state, setState, translate, setTranslate } = useContext(context);
  return (
    <nav className="nav">
      <button
        autoFocus={true}
        className={state === "Home" ? "buttonfocus" : "button"}
      >
        <img src={iHome} alt="" />
        <p className="menutext" onClick={() => setState("Home")}>
          {translate ? "Inicio" : "Home"}
        </p>
      </button>
      <button className={state === "About" ? "buttonfocus" : "button"}>
        <img src={iAbout} alt="" />
        <p className="menutext" onClick={() => setState("About")}>
          {translate ? "Acerca" : "About"}
        </p>
      </button>
      <button className={state === "Experience" ? "buttonfocus" : "button"}>
        <img src={iProject} alt="" />
        <p className="menutext" onClick={() => setState("Experience")}>
          {translate ? "Experiencia" : "Experience"}
        </p>
      </button>
      <button className={state === "Education" ? "buttonfocus" : "button"}>
        <img src={iSkills} alt="" />
        <p className="menutext" onClick={() => setState("Education")}>
          {translate ? "Educacion" : "Education"}
        </p>
      </button>
      <button className={state === "Contact" ? "buttonfocus" : "button"}>
        <img src={iContact} alt="" />
        <p className="menutext" onClick={() => setState("Contact")}>
          {translate ? "Contacto" : "Contact"}
        </p>
      </button>
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
