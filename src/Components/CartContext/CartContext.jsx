import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);

    const addItem = (product, qty) => {
        if (isInCart(product.id)){//aca iria si encuentra en el carrito
            setCartList(cartList.map(producto => producto.id == product.id? {...producto,quantity: producto.quantity + qty}:product))
        }
        else{//Cuando no lo encuentra
            product.quantity = qty
            setCartList([...cartList, product]);
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) =>{
        return cartList.find((product)=> product.id == id);
    }
    
  const sumar = (product) => {
    if(isInCart(product.id)){
        setCartList(cartList.map(producto => producto.price + product.price))
        console.log(cartList);
    }
  }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, sumar}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider