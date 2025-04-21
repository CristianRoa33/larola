import { CartContext } from "./CartContext";
import React from "react";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);       
    const addProduct = product => setCart ([...cart, product])
    const cantidadproductos = () => {
    const cantidades = cart.map (prod=> prod.Cantidad)
    const total = cantidades.reduce((acc, curr) => acc + curr, 0)
    return total
    }
    return (
        <CartContext.Provider value={{ addProduct, cantidadproductos, cart}}>
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;