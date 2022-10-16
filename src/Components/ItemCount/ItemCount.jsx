import { useState } from "react";
import '../ItemCount/ItemCount.css'
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const ItemCount = ({initial, stock, onAdd}) => {

    const ctx = useContext(CartContext);

    const [ItemCount, setItemCount] = useState(initial);


    const sumar = () => {
        if (ItemCount < stock){
        setItemCount( ItemCount + 1)}
    }

    const restar = () => {
        if (ItemCount > initial){
        setItemCount( ItemCount - 1)}
    }

    return (
        <><div className="item-count">
        <button className="e-c" onClick={()=> restar()}>-</button>
        <span className="count">{ItemCount}</span>
        <button className="e-c" onClick={()=> sumar()}>+</button>
        <button className="add" onClick={()=> onAdd(ItemCount)}>Agregar al carro</button>
        </div></>
    )
}

export default ItemCount;