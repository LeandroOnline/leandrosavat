import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/videos/short2.mp4";
import { createContext, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Project from "./components/Projects";

export const context = createContext();

function App() {
  const [state, setState] = useState("Home");
  const provider = { state, setState };

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
