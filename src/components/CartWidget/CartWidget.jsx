import React from "react"
import cart from "../../assets/cart.png"
import styles from "./CartWidget.module.css"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router";

function CartWidget () {
    const {cantidadproductos} = useContext (CartContext)
    return (
        <div className={styles.container}>
            <Link to="cart"><img src={cart} className={styles.cartimage}alt="imagen-carrito"/></Link>
            <span className={styles.cuenta}>{cantidadproductos()}</span>
        </div>)
}



export default CartWidget