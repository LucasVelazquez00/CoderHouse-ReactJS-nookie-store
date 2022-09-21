import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (item) => {

  const [itemCount, setItemCount] = useState(0)

  const onAdd = (itemCount) => {
    alert(itemCount);
    setItemCount(itemCount)
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