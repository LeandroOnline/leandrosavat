import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets/Perfil7.png";
import portada from "../assets/wave.png";

function Home() {
  const { state } = useContext(context);
  const code = "< Welcome />";
  return (
    <div className={state === "Home" ? "merge" : "separate"}>
      <div className="container">
        <div className="centerAll">
          <img src={portada} className="portada"></img>
          <div className="profile">
            <img className="perfil" src={perfil} alt="" />
            <h1 className="name">Leandro Savat</h1>
          </div>
          <div className="subname">
            <h2>FULL STACK WEB DEVELOPER</h2>
            <h2>& PHOTOGRAPHER</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
