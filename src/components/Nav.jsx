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
        <img src={iHome} alt="" onClick={() => setState("Home")} />
        <p className="menutext">Home</p>
      </button>
      <button className="button">
        <img src={iAbout} alt="" onClick={() => setState("About")} />
        <p className="menutext">About</p>
      </button>
      <button className="button">
        <img src={iSkills} alt="" onClick={() => setState("Skills")} />
        <p className="menutext">Skills</p>
      </button>
      <button className="button">
        <img src={iContact} alt="" onClick={() => setState("Contact")} />
        <p className="menutext">Contact</p>
      </button>
      <button className="button">
        <img src={iProject} alt="" onClick={() => setState("Project")} />
        <p className="menutext">Projects</p>
      </button>
      <img src="" alt="" />
    </div>
  );
}
export default Nav;
