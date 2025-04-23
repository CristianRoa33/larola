import { CartContext } from "./CartContext";
import React from "react";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const clearcart = () => setCart([]); 
    const deleteProduct = id => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }
    const addProduct = product => setCart ([...cart, product])
    const cantidadproductos = () => {
    const cantidades = cart.map (prod=> prod.Cantidad)
    const cantidadtotal = cantidades.reduce((acc, curr) => acc + curr, 0)
    return cantidadtotal
    }

    const getTotal = () => {
        const soloCantidades = cart.map(prod => prod.Cantidad*prod.Precio)
        const total = soloCantidades.reduce((acc, current) => acc + current, 0)
        
        return total
    }
    
    const values = {
        cart,
        addProduct,
        cantidadproductos,
        clearcart,
        deleteProduct,
        getTotal
    };

    return (
        <CartContext.Provider value={ values  }>
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider;