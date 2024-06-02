import { createContext, useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import * as pages from "./pages";
import { Nav } from "./components";
import video from "./assets/videos/short2.mp4";
import './animations.css';
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

  const renderPage = () => {
    switch (state) {
      case "Home":
        return <pages.Home />;
      case "About":
        return <pages.About />;
      case "Education":
        return <pages.Education />;
      case "Contact":
        return <pages.Contact />;
      case "Experience":
        return <pages.Experience />;
      default:
        return <pages.Home />;
    }
  };

  return (
    <context.Provider value={provider}>
      <div className="app">
        <video src={video} autoPlay loop muted></video>
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>{renderPage()}</Suspense>
      </div>
    </context.Provider>
  );
}

export default App;
