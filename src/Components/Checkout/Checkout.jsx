import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CarContext';
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import './Checkout.css';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const comprar = (data) => {
        const pedido = { cliente: data, productos: carrito, total: precioTotal(), fecha: serverTimestamp() };
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }
    
    const watchEmail = watch("email", "");
    const watchEmail2 = watch("email2", "");

    const onSubmit = (data) => {
        if (watchEmail === watchEmail2) {
            comprar(data);
        } else {
            Swal.fire({
                title: "Atencion!",
                text: "Los emails no coinciden. Intente nuevamente",
                icon: "error"
              });
        }
    };
    
    if (pedidoId) {
        return (
            <div className="contenedor">
                <h1 className="titulo">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className='contenedor'>
            <h1 className='titulo'>Finalizar compra</h1><br />
            <form className='formulario' onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder='Nombre' {...register("nombre",{ required: true })} />
                {errors.nombre && <span className="error-message">Campo obligatorio</span>}
                <input type="text" placeholder='Apellido' {...register("apellido",{ required: true })} />  
                {errors.apellido && <span className="error-message">Campo obligatorio</span>} 
                <input type="text" placeholder='Teléfono' {...register("telefono",{ required: true })} /> 
                {errors.telefono && <span className="error-message">Campo obligatorio</span>}
                <input type="text" name="email" placeholder='Email' {...register("email", { required: true })} />  
                {errors.email && <span className="error-message">Correo electrónico inválido</span>} 
                <input type="text" name="email2" placeholder='Confirma Email' {...register("email2", { required: true })} />
                {errors.email2 && <span className="error-message">Correo electrónico inválido</span>} 
                <button className='btn-finalizar-compra' type='submit'>Comprar</button>  
            </form>
        </div>
    );
}

export default Checkout;