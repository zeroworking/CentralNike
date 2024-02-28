import React from 'react';
import './ItemCount.css'

const ItemCount = ({cantidad,handleRestar,handleSumar,handleAgregar}) => {
  return (
    <div>
      <div className='item-count'>
        <button class='btn-restar' onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button class='btn-sumar' onClick={handleSumar}>+</button>
      </div>
      <button className='agregar-al-carro' onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;