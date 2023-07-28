import { useContext, useEffect, useRef } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets//images/Perfil7.png";
import Typed from "typed.js";

function Home() {
  const { state, translate } = useContext(context);
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Experience Developer ✓",
        "Product Design ✓",
        "FrontEnd UX Developer✓",
        "Full Stack Development ✓",
        "UI-UX Design ✓",
        "Scrum ✓",
      ],
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
          <div className="profile">
            <img className="perfil" src={perfil} alt="" />
          </div>
          <div className="subname">
            <h1 className="name">Leandro Savat</h1>
            <h2>
              {translate
                ? "Experto en Ingenieria Web con formacion en: "
                : "Web Engineering Expert with training in:"}
            </h2>
            <h2 className="powergray">
              <span className="powergray" ref={typedRef}></span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
