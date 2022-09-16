import React from 'react'
import { Link } from 'react-router-dom'
import foto from "../assets/logo1.png"
import CartWidget from './CartWidget'


const NavBar = () => {
    const numero = 5;
    return (
        <div className='navBar'>

            <Link to="/"><img src={foto} alt="foto del logo" /></Link>
            <Link to="/" className='link'>Inicio</Link>
            <Link to={`/titulares/${numero}`} className='link'>Titular</Link>
            <Link to="#" className='link'>Suplente</Link>
            <Link to="#" className='link'>Mas Informacion</Link>
            <Link to="/carrito/" className='link'> <CartWidget /> </Link>


        </div >
    )
}

export default NavBar