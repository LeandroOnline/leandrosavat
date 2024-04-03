import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/videos/short2.mp4";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Education";
import Contact from "./pages/Contact";
import Project from "./pages/Experience";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
        <Home />
        <About />
        <Skills />
        <Contact />
        <Project />
      </div>
    </context.Provider>
  );
}

export default App;
