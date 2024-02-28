import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo-texto'>
        <img className='cartimagen' src="https://firebasestorage.googleapis.com/v0/b/react-proyectofinal-nikestore.appspot.com/o/logonike.png?alt=media&token=f46bca53-5591-4fbb-8fee-84ccbff4e2d3" alt="logonike" />
        <h1>CentralNike</h1>
      </Link>
      <ul className='menu'>
        <li> <Link className='menu-link' to="/">Inicio</Link></li>
        <li><Link className='menu-link' to="/somos">Somos</Link></li>
        <li><Link className='menu-link' to="/">Productos</Link></li>
        <li><Link className='menu-link' to="/productos/Hombre">Hombre</Link></li>
        <li><Link className='menu-link' to="/productos/Mujer">Mujer</Link></li>
        <li><Link className='menu-link' to="/productos/Niños">Niños</Link></li>
        <li><CartWidget/></li>
      </ul>
    </nav>
  )
}

export default Navbar;