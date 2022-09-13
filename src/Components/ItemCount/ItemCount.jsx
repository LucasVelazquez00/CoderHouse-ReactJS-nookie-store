//componente para agregar una cantidad al carro

import React, { useEffect } from "react";
import { useState } from "react";


const ItemCount = ({initial, stock, onAdd}) => {


    const [ItemCount, setItemCount] = useState(initial);


    const sumar = () => {
        if (ItemCount < stock){
        setItemCount( ItemCount + 1)}
    }


    const restar = () => {
        if (ItemCount > initial){
        setItemCount( ItemCount - 1)}
    }


    useEffect (()=>{
        setTimeout(()=>{
        return ()=>{
            console.log('s');
        }
        }, 1000);
    }, )


    return (
        <>
        <button onClick={()=> restar()}>-</button>
        <span>{ItemCount}</span>
        <button onClick={()=> sumar()}>+</button>
        <button onClick={()=> onAdd(ItemCount)}>Agregar al carro</button>
        </>
    )
}

export default ItemCount;