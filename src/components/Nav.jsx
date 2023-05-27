import "./Nav.css";
import iHome from "../assets/icons/home.png";
import iAbout from "../assets/icons/information.png";
import iSkills from "../assets/icons/capability.png";
import iContact from "../assets/icons/chat.png";
import iProject from "../assets/icons/puesta-en-marcha.png";
import { useContext } from "react";
import { context } from "../App";

function Nav() {
  const { setState } = useContext(context);
  return (
    <nav className="nav">
      <button autoFocus={true} className="button" >
        <img src={iHome} alt=""  />
        <p className="menutext" onClick={() => setState("Home")}>Home</p>
      </button>
      <button className="button">
        <img src={iAbout} alt=""  />
        <p className="menutext" onClick={() => setState("About")}>About</p>
      </button>
      <button className="button">
        <img src={iSkills} alt="" />
        <p className="menutext" onClick={() => setState("Education")}>Education</p>
      </button>
      <button className="button">
        <img src={iProject} alt=""  />
        <p className="menutext" onClick={() => setState("Experience")}>Experience</p>
      </button>
      <button className="button">
        <img src={iContact} alt=""  />
        <p className="menutext" onClick={() => setState("Contact")}>Contact</p>
      </button>
    </nav>
  );
}
export default Nav;
