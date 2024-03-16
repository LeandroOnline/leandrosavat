import { useContext, useEffect, useRef } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets/images/superwebpros.png";
import Typed from "typed.js";

function Home() {
  const { state, translate } = useContext(context);
  const typedRef = useRef(null);
  const start = "< ";
  const end = " />";
  // useEffect(() => {
  //   const options = {
  //     strings: [
  //       "Web Engineering Specialist ✓",
  //       "Product Designer ✓",
  //       "UX-UI Developer ✓",
  //       "Full Stack Developer ✓",
  //     ],
  //     typeSpeed: 60,
  //     backSpeed: 70,
  //     backDelay: 1500,
  //     loop: true,
  //     smartBackspace: true,
  //     startDelay: 300,
  //   };
  //   new Typed(typedRef.current, options);
  // }, []);

  return (
    <div className={state === "Home" ? "merge" : "separate"}>
      <div className="container">
        <div className="centerAll">
          <div className="profile">
            <img className="perfil" src={perfil} alt="" />
          </div>
          <div className="subname">
            <h1 className="name">
              {start}SuperWebPros{end}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
//test
export default Home;
