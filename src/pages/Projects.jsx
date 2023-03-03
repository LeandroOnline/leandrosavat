import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Projects.css";

function Project() {
  const { state } = useContext(context);
  return (
    <div className={state === "Project" ? "merge" : "separate"}>
      <div className="container">
        <div className="barraproject">project</div>
      </div>
    </div>
  );
}
export default Project;
