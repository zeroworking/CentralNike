import React from 'react';
import Item from '../Item/Item';
import { toCapital } from '../../helpers/toCapital';
import './ItemList.css';

const ItemList = ({productos, titulo}) => {
  
  return (
    <div className='contenedor'>
      <h2 className='titulo'>{toCapital(titulo)}</h2>      
      <div className="productos">
        {productos.map((prod)=> <Item producto={prod} key={prod.id} />)}
      </div>
    </div>
  )
}

export default ItemList;