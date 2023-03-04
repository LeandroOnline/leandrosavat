import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets/Perfil.jpg";

function Home() {
  const { state } = useContext(context);
  const code = "< Welcome />";
  return (
    <div className={state === "Home" ? "merge" : "separate"}>
      <div className="container">
        <div className="centerAll">
          <p className="portada"></p>
          <img className="perfil" src={perfil} alt="" />
          <h1 className="name">Leandro Savat</h1>
          <h2 className="subname">Full Stack Web Developer & Photographer</h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
