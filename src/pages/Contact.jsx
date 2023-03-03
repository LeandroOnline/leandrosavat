import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function Contact() {
  const {state}=useContext(context);
  return <div className={state==='Contact'? "merge" : "separate"}>Contact</div>;
}
export default Contact;