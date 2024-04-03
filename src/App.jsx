import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import * as pages from "./pages";
import { Nav } from "./components";
import video from "./assets/videos/short2.mp4";

export const context = createContext();

function App() {
  const [state, setState] = useState("Home");
  const [translate, setTranslate] = useState(false);
  const provider = { state, setState, translate, setTranslate };
  const params = useLocation();

  useEffect(() => {
    let hash = params.hash ? params.hash.replace("#", "") : "Home";
    let hashUppercase = hash[0].toUpperCase() + hash.slice(1);
    setState(hashUppercase);
  }, [params]);

  return (
    <context.Provider value={provider}>
      <div className="app">
        <video src={video} autoPlay loop muted></video>
        <Nav />
        <pages.Home />
        <pages.About />
        <pages.Education />
        <pages.Contact />
        <pages.Experience />
      </div>
    </context.Provider>
  );
}

export default App;
