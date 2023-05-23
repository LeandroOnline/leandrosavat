import "./Carrusel.css";
import flechaizq from "../assets/images/flecha-izquierda.png";
import flechader from "../assets/images/flecha-derecha.png";
import carpeta from "../assets/images/carpetas.png";
import { useState } from "react";
import courses from "../utils/courses";
import drive from "../utils/drive";

function Carrusel() {
  const [page, setPage] = useState(0);

  return (
    <section className="column center">
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
          <p className="text">Certificate: {page + 1}</p>
          <progress max="22" value={page + 1}></progress>
        </div>
      </div>

      <a className="link-certificate text" href={drive} target="_blank">

          <img className="carpetaicon" src={carpeta} alt="" />
          Certificate Folder

      </a>
    </section>
  );
}
export default Carrusel;
