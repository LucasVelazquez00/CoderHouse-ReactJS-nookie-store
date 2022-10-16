import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import "../ItemDetail/ItemDetail.css";

const ItemDetail = ({item}) => {

  const [itemCount, setItemCount] = useState(0)

  const ctx = useContext (CartContext)

  const onAdd = (qty) => {

    alert(`Se agregó ${qty} de este producto al carro`);

    setItemCount(qty);

    ctx.addItem (item, qty)//esto va del cartcontext
  };


  return (
    <>
    <div className="div-detail">
      <img className="img-detail" src={item.pictureUrl} alt="img"/>
      <div className="detail-txt">
        <h6 className="h6-detail">{item.title}</h6>
       
        <p className="desc-txt">{item.description}</p> 
        <div className="price-txt">
        <span>Precio: ${item.price}</span>

        <p>unidades disponibles {item.stock}</p></div>

    {
      itemCount === 0 ?
      <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} /> 
      : <Link to='/cart'><button>ir al carro</button></Link>
    }   
      </div>
    </div>
    </>
  );
}

export default ItemDetail