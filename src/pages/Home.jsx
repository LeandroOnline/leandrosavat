import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Home.css";

function Home() {
  const { state } = useContext(context);
  return (
    <div className={state === "Home" ? "merge" : "separate"}>
      <div className="container">
        <div className="module">modulos</div>
      </div>
    </div>
  );
}
export default Home;
