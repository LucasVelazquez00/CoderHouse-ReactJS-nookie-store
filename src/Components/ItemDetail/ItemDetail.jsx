import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

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
    <div>
      <img className="img" src={item.pictureUrl} alt="img"/>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
        <span>{item.price}</span>
        
        <p>unidades disponibles {item.stock}</p>
    </div>
    <div>
    {
      itemCount === 0 ?
      <ItemCount initial={itemCount} stock={item.stock} onAdd={onAdd} /> 
      : <Link to='/cart'><button>ir al carro</button></Link>
    }
    </div>
    </>
  );
}

export default ItemDetail