import React from "react"
import cart from "../assets/cart.png"
import styles from "../components/CartWidget.module.css"

function CartWidget () {
    return (
        <div className={styles.container}>
            <img src={cart} className={styles.cartimage}   alt="imagen-carrito"/>
            <span className={styles.cuenta}>0</span>
        </div>)
}

export default CartWidget