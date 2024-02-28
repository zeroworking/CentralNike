import ItemCount from "../ItemCount.jsx/ItemCount";
import { toCapital } from "../../helpers/toCapital";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CarContext";
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const {carrito,agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);
    const[cantidad,setCantidad] = useState(1);
    const handleRestar = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () =>{
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    
    return (
        <div className="contenedor">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} /> 
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoria: {toCapital(item.categoria)}</p>
                    <p className="precio">${item.precio}</p>                    
                    <ItemCount 
                        cantidad={cantidad} 
                        handleSumar={handleSumar} 
                        handleRestar={handleRestar} 
                        handleAgregar={()=>{agregarAlCarrito(item,cantidad)}}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;