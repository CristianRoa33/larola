import React from "react"
import larola from "../assets/larola.png"
import CartWidget from "../components/cartwidget"


function navbar () {
    return (
        <div className='nav'>
            <a href="#"><img src= {larola} id="logo-rola"  alt="logo.rola" /></a>
                <div className='nav-links'>
                    <a href="#">Mujer</a>
                    <a href="#">Hombre</a>
                    <a href="#">Coleccion</a>
                    <a href="#"><CartWidget/></a>
                </div>
        </div> 
    )
}

export default navbar