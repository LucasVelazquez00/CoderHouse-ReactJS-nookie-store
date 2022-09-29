import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import "../Cart/Cart.css"

const Cart = () => {

  const ctx = useContext (CartContext)

  console.log(ctx)

  return (
  <>
    <h1>Cart</h1>
    <button onClick={ctx.clear}>Eliminar todos los productos</button><br/><br />
    <div className='checkbox'>
    {
      ctx.cartList.map(item=> <li className='buy-box'> 
      <img src={item.pictureUrl} width='250' alt='producto'/>
      <div className="text-buy"> 
      <h5>{item.title}</h5><br />
      <p>Cantidad: {item.quantity} prenda/s</p>
          <p>${()=> ctx.sumar(item.price)} </p></div>
        <button onClick={()=>ctx.removeItem(item.id)}>Eliminar producto</button>
        </li>)
    }
    </div>
    </>
  )
}

export default Cart