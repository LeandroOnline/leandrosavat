import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets//images/Perfil7.png";
import portada from "../assets/images/wave.png";

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
            <div className="row">
              <h1>FULL STACK</h1>
              <p className="subname power"> WEB DEVELOPER</p>
            </div>
            <h2>& PHOTOGRAPHER</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
