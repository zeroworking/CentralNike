import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CarContext';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    return (
        <div>
            <li>
                <Link className='menu-link' to="/cart">
                <img className='cartimagen' src="https://firebasestorage.googleapis.com/v0/b/react-proyectofinal-nikestore.appspot.com/o/cart.png?alt=media&token=d0975878-b3b5-4a13-98c9-e32ce19fa6f8" alt="Carrito" /> 
                </Link>
                <span className='numerito logo'>{cantidadEnCarrito()}</span>
            </li>
        </div>
    );
};

export default CartWidget;
