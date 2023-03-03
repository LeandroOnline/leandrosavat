import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function Project() {
  const {state}=useContext(context);
  return <div className={state==='Project'? "merge" : "separate"}>Project</div>;
}
export default Project;