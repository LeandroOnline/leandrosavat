import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function Skills() {
  const {state}=useContext(context);
  return <div className={state==='Skills'? "merge" : "separate"}>Skills</div>;
}
export default Skills;