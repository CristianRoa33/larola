import React from "react"
import cart from "../assets/cart.png"

function CartWidget () {
    return (
        <div>
            <img src={cart} id="cartimage"   alt="imagen-carrito"/>
            <span className="Cuenta">0</span>
        </div>)
}

export default CartWidget