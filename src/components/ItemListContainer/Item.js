import Swal from "sweetalert2";
import React, { useState } from "react";


const Item = ({
    id,
    category,
    description,
    image,
    price,
    rating,
    title,
}) => {

    let stock = 10;
    const[countClick, setCountClick]=useState(0);
    const sumaContador =()=>{
        if(countClick < stock){
            setCountClick(countClick + 1)
        }
        
    }
    const restaContador =()=>{
        if (countClick > 0){
            setCountClick(countClick - 1)
        }
    }

    const agregarAlCarro = async (e,r)=>{
        let mensaje = "";
        let typeIcon = "";
        let title = "";

        if(e === 0){
            mensaje = "Por favor seleccione un producto";
            typeIcon = "warning";
            title = "Error";
        }else{
            mensaje = "Producto agregado al carro";
            typeIcon = "success";
            title = "Exito";
        }

        Swal.fire({
            title: title,
            text: mensaje,
            icon: typeIcon,
        });
    

    }


    return(

        <div className="flex-items">
            <div className="card">
                <img className="img-card" src={image} alt= "Product"/>
                <h3>{title.substring(0,25)+"..."}</h3>
                <p className="price ">{" $"+price}</p>
                <p>{description.substring(0,50)}<button className="btn-detalle" onClick={() => sumaContador()}>...</button></p>
                <div className="count-row">
                    <button className="btn-blue" onClick={() => restaContador()}>-</button>
                    <h3 className="count-item">{countClick} </h3>
                    <button className="btn-count" onClick={() => sumaContador()}>+</button>
                </div>
                <p><button className="btn-add" id={id} onClick={() => agregarAlCarro(countClick,title)}> Agregar al carro</button></p>
            </div>
        </div>);
}

export default Item;
