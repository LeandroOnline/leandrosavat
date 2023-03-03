import { useContext } from "react";
import { context } from "../App";
import "./Merge.css";

function Home() {
  const {state}=useContext(context);
  return <div className={state==='Home'? "merge" : "separate"}>Home</div>;
}
export default Home;
