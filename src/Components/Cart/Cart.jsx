import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import "../Cart/Cart.css"
import { serverTimestamp } from "firebase/firestore"
import { doc, setDoc, collection } from "firebase/firestore";
import {db} from "../firebaseConfig/firebaseConfig"

const Cart = () => {

  const ctx = useContext (CartContext);

  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map (item => ({
    id: item.id,
    title: item.title,
    price: item.price,
    quantity: item.qty
  }))
    let order = {
      buyer:{
        name:'el bicho',
        email:'cr7@elbicho.com',
        phone:'1928374655'
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.calcTotal()
    }
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order);
    alert('your order has been created')
  }

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
    
    <div>
      <button onClick={createOrder}>terminar compra</button>
    </div>
    </div>
    </>
  )
}

export default Cart