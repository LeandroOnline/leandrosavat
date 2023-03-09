import "./App.css";
import Nav from "./components/Nav";
import video from "./assets/videos/short2.mp4";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Project from "./pages/Projects";

export const context = createContext();

function App() {
  const [state, setState] = useState("Home");

  return (
    <context.Provider value={{ state, setState }}>
      <div className="app">
        <video src={video} autoPlay loop muted></video>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Contact />
        <Project />
        <audio></audio>
      </div>
    </context.Provider>
  );
}

export default App;
