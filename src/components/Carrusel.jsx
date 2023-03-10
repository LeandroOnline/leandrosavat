import "./Carrusel.css";
import english from "../assets/courses/english.jpg";
import figma from "../assets/courses/figma.jpg";
import introprogramacion from "../assets/courses/introprogramacion.jpg";
import fullstack from "../assets/courses/fullstack.jpg";
import scrum from "../assets/courses/scrum.jpg";
import scrumavanzado from "../assets/courses/scrumavanzado.jpg";
import scrummaster from "../assets/courses/scrummaster.jpg";
import scrumroles from "../assets/courses/scrumroles.jpg";
import git from "../assets/courses/git.jpg";
import github from "../assets/courses/github.jpg";
import htmlcss from "../assets/courses/htmlcss.jpg";
import js from "../assets/courses/js.jpg";
import frontend from "../assets/courses/frontend.jpg";
import jsavanzado from "../assets/courses/jsavanzado.jpg";
import jsavanzadopro from "../assets/courses/jsavanzadopro.jpg";
import reactbasico from "../assets/courses/reactjsbasico.jpg";
import bdd from "../assets/courses/bdd.jpg";
import dockerbasico from "../assets/courses/dockerbasico.jpg";
import docker from "../assets/courses/docker.jpg";
import mongodb from "../assets/courses/mongodb.jpg";
import mysqlbasico from "../assets/courses/mysqlbasico.jpg";
import tsbasico from "../assets/courses/tsbasico.jpg";

import flechaizq from "../assets/images/flecha-izquierda.png";
import flechader from "../assets/images/flecha-derecha.png";
import carpeta from "../assets/images/carpetas.png";

import { useState } from "react";

const drive =
  "https://drive.google.com/drive/folders/101tebXH78ZzqScOIQdb4DKaWKE8GzRGp?usp=sharing";

const courses = [
  english,
  figma,
  introprogramacion,
  fullstack,
  scrum,
  scrumavanzado,
  scrummaster,
  scrumroles,
  git,
  github,
  htmlcss,
  js,
  frontend,
  jsavanzado,
  jsavanzadopro,
  reactbasico,
  bdd,
  dockerbasico,
  docker,
  mongodb,
  mysqlbasico,
  tsbasico,
];

function Carrusel() {
  const [page, setPage] = useState(0);

  return (
    <div className="column center">
      <div className="carrusel-container">
        <div className="row height">
          <img
            className="flecha"
            src={flechaizq}
            alt=""
            onClick={() =>
              page === 0 ? setPage(courses.length - 1) : setPage(page - 1)
            }
          />
          <img className="course" src={courses[page]} alt="course" />
          <img
            className="flecha-izq"
            src={flechader}
            alt=""
            onClick={() =>
              page === courses.length - 1 ? setPage(0) : setPage(page + 1)
            }
          />
        </div>
        <div className="progress">
          <p>Course: {page + 1}</p>
          <progress max="22" value={page + 1}></progress>
        </div>
      </div>

      <a className="link-certificate" href={drive} target="_blank">

          <img className="carpetaicon" src={carpeta} alt="" />
          Certificate Folder

      </a>
    </div>
  );
}
export default Carrusel;
