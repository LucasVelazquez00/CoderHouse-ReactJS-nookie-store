import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);

    const addItem = (product, qty) => {
        if (isInCart(product.id)){//aca iria si encuentra en el carrito
            setCartList(cartList.map(producto => producto.id === product.id? {...producto,quantity: producto.quantity + qty}:product))//no anda
        console.log('pasó por el if')}
        else{//Cuando no lo encuentra
            product.quantity = qty
            setCartList([...cartList, product]);
            console.log('pasó por el else')
        }
        console.log(cartList)
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
        //remueve uno
    }

    const clear = () => {
        setCartList([]);
        //remueve todo
    }

    const isInCart = (id) =>{
        return cartList.find((product)=> product.id === id);
        //se fija si hay algo
    }
    
  const sumar = (product) => {
    if(isInCart(product.id)){
        setCartList(cartList.map(producto => producto.price + product.price))
        
    }
  }
  const calcTotal = () =>{
    let total = 0;
    if (cartList.length > 0) {
      let costos = cartList.map((item) => item.price * item.quantity);
      total = costos.reduce((a, b) => {
        return a + b
        
      });
    }
    return total;
  };
console.log(calcTotal());

    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, sumar, calcTotal}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider