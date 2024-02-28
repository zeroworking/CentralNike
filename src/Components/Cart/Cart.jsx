import React, { useContext } from 'react';
import { CartContext } from '../../Context/CarContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Carrito = () => {
  const {carrito, precioTotal,vaciarCarrito} = useContext(CartContext);
  const handleVaciar = ()=>{
    vaciarCarrito();
  }
  return (
    <div className='contenedor'>
      <h1 className='titulo'>Carrito</h1>
      {
        carrito.map((prod) =>(
          <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
            <p>Precio unit: $ {prod.precio}</p>
            <p>Precio total: $ {prod.precio * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
            <br />
            <hr/>
          </div>
        ))
      }
      {
        carrito.length > 0 ? 
          <div>
            <br />
            <h2>Precio total: $ {precioTotal()} </h2>
            <button className='btn-vaciar-el-carro btn-enviar' onClick={handleVaciar}>Vaciar Carrito</button>
            
            <p>
            <button class="btn-realizar-compra"><Link to="/checkout">Realizar la compra</Link></button>
            </p>
            
          </div>:
          
          <h2>El carrito esta vacio.</h2>
      }
    </div>
  )
}

export default Carrito;