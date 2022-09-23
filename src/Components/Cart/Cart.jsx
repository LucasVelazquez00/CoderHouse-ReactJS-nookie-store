import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
const Cart = () => {
  const ctx = useContext (CartContext)
  return (<>
    <h1>Cart</h1>
    <button onClick={ctx.clear}>Eliminar todos los productos</button><br/><br />
    {
      ctx.cartList.map(item=> <li> 
        <img src={item.pictureUrl} width='250' alt='producto'/> 
        {item.title}  ${item.price} 
        <button onClick={()=>ctx.removeItem(item.id)}>Eliminar producto</button>
        <p>{item.quantity}</p></li>)
    }
    </>
  )
}

export default Cart