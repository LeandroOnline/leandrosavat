import { useContext, useEffect, useRef } from "react";
import { context } from "../App";
import "../Merge.css";
import "./Home.css";
import perfil from "../assets//images/Perfil2 copy.png";
import Typed from "typed.js";

function Home() {
  const { state, translate } = useContext(context);
  const typedRef = useRef(null);
  const start = "< ";
  const end = " />";
  useEffect(() => {
    const options = {
      strings: [
        "Web Engineering Specialist ✓",
        "Digital Product Management ✓",
        "Technical Growth Partner ✓",
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
    <div className={state === "Home" ? "merge" : "separate"} id="home">
      <div className="container">
        <div className="centerAll">
          <div className="profile">
            <img className="perfil" src={perfil} alt="perfil" />
          </div>
          <div className="subname">
            <h1 className="name">
              {start}Leandro Savat{end}
            </h1>
            <div className="textTitles">
              <h2 className="subtitle">
                {translate
                  ? "El socio estratégico que necesitas a tu lado"
                  : "The strategic partner you need at your side"}
              </h2>
              <h2 className="subtitle">
                <span ref={typedRef}></span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//test
export default Home;
