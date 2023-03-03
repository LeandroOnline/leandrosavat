import "./Nav.css";
import iHome from "../assets/icons/home.png";
import iAbout from "../assets/icons/information.png";
import iSkills from "../assets/icons/capability.png";
import iContact from "../assets/icons/chat.png";
import iProject from "../assets/icons/puesta-en-marcha.png";
import { useContext } from "react";
import { context } from "../App";

function Nav() {
  const { state, setState } = useContext(context);
  return (
    <div className="nav">
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
        <p className="menutext" onClick={() => setState("Skills")}>Skills</p>
      </button>
      <button className="button">
        <img src={iContact} alt=""  />
        <p className="menutext" onClick={() => setState("Contact")}>Contact</p>
      </button>
      <button className="button">
        <img src={iProject} alt=""  />
        <p className="menutext" onClick={() => setState("Project")}>Projects</p>
      </button>
      <img src="" alt="" />
    </div>
  );
}
export default Nav;
