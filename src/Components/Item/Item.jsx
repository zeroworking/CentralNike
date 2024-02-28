import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({producto}) => {
  return (
    <div className='producto'>
      <img src={producto.imagen} alt={producto.titulo} />
      <div>
        <h4>{producto.titulo}</h4>
        <div>Precio: ${producto.precio}</div>
        <div>Categoria: {producto.categoria}</div>   
        <Link className='btn-ver-mas' to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}

export default Item;