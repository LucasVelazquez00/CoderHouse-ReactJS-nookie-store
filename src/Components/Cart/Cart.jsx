import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "../Cart/Cart.css";
import { doc, setDoc, collection, serverTimestamp, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { Link } from "react-router-dom";

const Cart = () => {
  const ctx = useContext(CartContext);

  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.qty,
    }));
    let order = {
      buyer: {
        name: "el bicho",
        email: "cr7@elbicho.com",
        phone: "1928374655",
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.calcTotal(),
    };console.log(order)
    const newOrderRef = doc(collection(db, "orders"))
    await setDoc(newOrderRef, order)
    ctx.cartList.forEach(async item => {
      const itemRef = doc(db, "productos", item.id);
        await updateDoc(itemRef, {
          stock: increment(-item.qty)
        }); 
    
      })
    ctx.clear()
    alert("your order has been created" + newOrderRef.id)
  };

  return (
    <>
      <h1 className="title-cart">Cart</h1>
      <div className="b-h">
        <Link to="/">
          <button className="click">Continuar comprando</button>
        </Link>
        <button className="click" onClick={ctx.clear}>Eliminar todos los productos</button>
      </div>
      <div className="checkbox">
        <div className="products-buying">
        {ctx.cartList.map((item) => (
          <li className="buy-box" key={item.id}>
            <img src={item.pictureUrl} width="250" alt="producto" />
            <div className="text-buy">
              <h5>
                <b>Producto: </b>
                {item.title}
              </h5>
              <br />
              <p>Cantidad: {item.quantity} prenda/s</p>
              <p>${item.price} c/u</p>
              <p>subtotal: ${item.price * item.quantity} </p>
            </div>
            <button className="click-2" onClick={() => ctx.removeItem(item.id)}>
              Eliminar producto
            </button>
          </li>
        ))}
        </div>

        <div className="price-box">
          <h4>Total de productos</h4>
          <br />
          {ctx.cartList.map((item) => (
          <p>total:{}</p>))
          }
          <button className="click-2" onClick={createOrder}>terminar compra</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
