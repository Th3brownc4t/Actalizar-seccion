import React, { useState } from "react";
import "./Actualizar.css";
import car from "./Images/car.jpg";
import ed from "./Images/3d.jpg";
import game from "./Images/K6Rz.gif";
import film from "./Images/film.jpg";

function Actualizar() {
  var [imagen, setImagen] = useState(car);
  var [curso, setCurso] = useState("Curso de React Js");
  var [software, setSoftware] = useState("Sofware: Visual Studio Code");
  var [descripcion, setDescripcion] = useState(
    "Un curso rapido sobre las bases de react"
    );
    
    
    let changeImagen = function (e) {
    e.preventDefault();
    const cambia = e.target.src;
    setImagen(cambia);
  };
  let changeCourse = function (e) {
    e.preventDefault();
    const cambia = e.target.previousSibling.value;
    setCurso(cambia);
    e.target.previousSibling.value = "";
  };
  let changeSoft = function (e) {
    e.preventDefault();
    const cambia = e.target.previousSibling.value;
    setSoftware(cambia);
    e.target.previousSibling.value = "";
  };
  let changeDesc = function (e) {
    e.preventDefault();
    const cambia = e.target.previousSibling.value;
    e.target.previousSibling.value = "";
    setDescripcion(cambia);
  };
  
  return (
    <div className="main">
      <div className="row">
        <div
          style={{backgroundImage:` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imagen})`}}
          className="col-12 col-lg-6 fondo d-flex flex-column text-light justify-content-center ps-4"
        >
          <h2 className="fs-1 fw-bolder">{curso}</h2>
          <p className="fw-bold" id="software">
            {software}
          </p>
          <p className="" id="descripcion">
            {descripcion}
          </p>
          <button className="actualizar mt-2">!inscribete¡</button>
        </div>
        <div
          className={`col-12 col-lg-6 d-flex flex-column text-light justify-content-center`}
        >
          <div className="d-flex flex-column formu justify-content-center">
            <form action="">
              <div>
                <input
                  id="curso"
                  type="text"
                  placeholder="Nombre del curso"
                  className="bg-secondary bg-opacity-10 rounded"
                ></input>
                <button className="actualizar mt-2" onClick={changeCourse}>
                  Actualizar
                </button>
              </div>
              <div>
                <input
                  type="text"
                  id="software"
                  placeholder="Software"
                  className="bg-secondary bg-opacity-10 rounded mt-4"
                ></input>
                <button className="actualizar mt-2" onClick={changeSoft}>
                  Actualizar
                </button>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Descripción"
                  className="bg-secondary bg-opacity-10 descripcion rounded mt-4 w-100"
                ></textarea>
                <button className="actualizar mt-2" onClick={changeDesc}>
                  Actualizar
                </button>
              </div>
            </form>
            <div className="d-flex flex-column">
              <div>
                <p className="text-dark fw-bold mt-4">Nueva imagen:</p>
              </div>
              <div className="gap-1 d-flex">
                <img className="imagen" onClick={changeImagen} src={car} alt="" />
                <img className="imagen" onClick={changeImagen} src={game} alt="" />
                <img className="imagen" onClick={changeImagen} src={film} alt="" />
                <img className="imagen" onClick={changeImagen} src={ed} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actualizar;
