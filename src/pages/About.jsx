import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function About() {
  const { state } = useContext(context);
  return (
    <div className={state === "About" ? "merge" : "separate"}>
      <div className="container">
        <div className="module">about</div>
      </div>
    </div>
  );
}
export default About;
