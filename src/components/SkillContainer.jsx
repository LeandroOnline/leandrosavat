import done from "../assets/icons/done.png";
import scrum from "../assets/icons/scrum.png";
import wordpress from "../assets/icons/wordpress.png";
import photoshop from "../assets/icons/photoshop.png";
import git from "../assets/icons/git.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import docker from "../assets/icons/docker.png";
import node from "../assets/icons/nodejs.png";
import express from "../assets/icons/express.png";
import mongodb from "../assets/icons/mongodb.png";
import figma from "../assets/icons/figma.png";
import notion from "../assets/icons/notion.png";
import "./SkillContainer.css";

function SkillContainer() {
  return (
    <div className="skill-container">
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Scrum</p>
        <img className="icon" src={scrum} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">WordPress</p>
        <img className="icon" src={wordpress} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Photoshop</p>
        <img className="icon" src={photoshop} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">GIT</p>
        <img src={git} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">HTML</p>
        <img src={html} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">CSS</p>
        <img src={css} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">JavaScript</p>
        <img src={js} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">React</p>
        <img src={react} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Docker</p>
        <img src={docker} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Node</p>
        <img src={node} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Express</p>
        <img src={express} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">MongoDB</p>
        <img src={mongodb} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Figma</p>
        <img src={figma} alt="" />
      </div>
      <div className="skill-item">
        <img className="done" src={done} alt="" />
        <p className="text">Notion</p>
        <img src={notion} alt="" />
      </div>
    </div>
  );
}
export default SkillContainer;
