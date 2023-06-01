import { useContext, useEffect, useRef } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets//images/Perfil7.png";
import portada from "../assets/images/fondo.jpg";
import Typed from "typed.js";

// home test

function Home() {
  const { state, translate } = useContext(context);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Full Stack", "FrontEnd", "BackEnd"],
      typeSpeed: 60,
      backSpeed: 70,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      startDelay: 300,
    };
    new Typed(typedRef.current, options);
  }, []);

  return (
    <div className={state === "Home" ? "merge" : "separate"}>
      <div className="container">
        <div className="centerAll">
          <img src={portada} className="portada"></img>
          <div className="profile">
            <img className="perfil" src={perfil} alt="" />
          </div>
          <div className="subname">
            <h1 className="name">Leandro Savat</h1>
            <p className="powergray">
              <span className="power" ref={typedRef}></span>{" "}
              {translate ? "PROGRAMADOR" : "DEVELOPER"}
            </p>
            <div className="column center">
              <h2>Scrum ✓</h2>
              <h2>Git Flow ✓</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
