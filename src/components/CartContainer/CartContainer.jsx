import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import styles from "./CartContainer.module.css";


function CartContainer () {
    const {cart} = useContext(CartContext)
    const {cantidadproductos} = useContext(CartContext)
    if (cart.length === 0) {
        return <h2>Tu carrito está vacío</h2>
    }
    return (    
        <ul className={styles.cartContainer}>
            {cart.map ((prod)=>(
                <li key={prod.id} className={styles.cart}>
                    <img src={prod.thumbnail} className={styles.thumbnail} alt={prod.thumbnail}/>
                    <h1 className={styles.title}>{prod.title}</h1>
                    <p>{prod.category}</p>
                    <h3>${prod.price}</h3>
                    <span>{cantidadproductos()}{prod.cantidad}</span>
                    <button className={styles.eliminar}>Eliminar</button>
                </li>
            ))}
        </ul>
    )
}

export default CartContainer