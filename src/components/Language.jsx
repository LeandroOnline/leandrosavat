import { useContext } from "react";
import "./Language.css";
import { context } from "../App";

function Language() {
  const { translate } = useContext(context);
  return (
    <div className="language-container">
      <p className="text">
        {translate ? "Español - Nativo" : "Spanish - Native"}
      </p>
      <progress max="100" value="100" />
      <p className="text">{translate ? "Ingles - B2" : "English - B2"}</p>
      <progress max="100" value="67" />
    </div>
  );
}
export default Language;
