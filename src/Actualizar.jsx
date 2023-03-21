import React from 'react'
import "./Actualizar.css"
import car from './Images/car.jpg'
import ed from './Images/3d.jpg'
import game from './Images/game.png'
import film from './Images/film.jpg'

function Actualizar() {

    function cambio() {

    }


    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 col-lg-6 fondo d-flex flex-column text-light justify-content-center ps-4">
                    <h2 className='fs-1 fw-bolder'>Curso de React JS</h2>
                    <p className='fw-bold'>Software: Visual Studio Code</p>
                    <p>Un curso rápido sobre las bases de React</p>
                    <button className='actualizar mt-2'>!inscribete¡</button>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column text-light justify-content-center">
                    <div className='d-flex flex-column formu justify-content-center'>
                        <div>
                            <input type="text" placeholder='Nombre del curso' className='bg-secondary bg-opacity-10 rounded'>
                            </input>
                            <button className='actualizar mt-2'>Actualizar</button>
                        </div>
                        <div>
                            <input type="text" placeholder='Software' className='bg-secondary bg-opacity-10 rounded mt-4'>
                            </input>
                            <button className='actualizar mt-2'>Actualizar</button>
                        </div>
                        <div>
                            <textarea type="text" placeholder='Descripción' className='bg-secondary bg-opacity-10 descripcion rounded mt-4 w-100'>
                            </textarea>
                            <button className='actualizar mt-2'>Actualizar</button>
                        </div>
                        <div className='d-flex flex-column'>
                            <div>
                                <p className='text-dark fw-bold mt-4'>Nueva imagen:</p>
                            </div>
                            <div className='gap-1 d-flex'>
                                <img className='imagen' src={car} alt="" />
                                <img className='imagen' src={game} alt="" />
                                <img className='imagen' src={film} alt="" />
                                <img className='imagen' src={ed} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actualizar