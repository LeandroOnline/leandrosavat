import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function Contact() {
  const { state } = useContext(context);
  return (
    <div className={state === "Contact" ? "merge" : "separate"}>
      <div className="container">
        <div className="module">contact</div>
      </div>
    </div>
  );
}
export default Contact;
