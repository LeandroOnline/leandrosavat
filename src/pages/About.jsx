import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function About() {
  const {state}=useContext(context);
  return <div className={state==='About'? "merge" : "separate"}>About</div>;
}
export default About;
