import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/videos/short2.mp4";
import { createContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Education";
import Contact from "./components/Contact";
import Project from "./components/Experience";

export const context = createContext();

function App() {
  const [state, setState] = useState("Home");
  const [translate, setTranslate] = useState(false);
  const provider = { state, setState, translate, setTranslate };

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
