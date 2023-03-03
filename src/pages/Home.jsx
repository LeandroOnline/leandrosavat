import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";
import perfil from "../assets/Perfil.jpg";


function Home() {
  const { state } = useContext(context);
  return (
    <div className={state === "Home" ? "merge" : "separate"}>
      <div className="container">
        <div className="centerAll">
          <img
            className="portada"
            src="https://astroaficion.com/wp-content/uploads/2012/04/Sirius-1-1200x799.jpg"
            alt=""
          />
          <img className="perfil" src={perfil} alt="" />
          <h1 className="name">Leandro Savat</h1>
          <h2 className="subname">Full Stack Developer & Photographer</h2>
        </div>
      </div>
    </div>
  );
}
export default Home;
