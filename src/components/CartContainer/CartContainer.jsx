import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import styles from "./CartContainer.module.css";


function CartContainer () {
    const {cart} = useContext(CartContext)
    const {cantidadproductos} = useContext(CartContext)
    if (cart.length === 0) {
        return <h2 className= {styles.vacio}>Tu Carrito Está Vacío</h2>
    }
    return (    
        <ul className={styles.cartContainer}>
            {cart.map ((prod)=>(
                <li key={prod.id} className={styles.cart}>
                    <img src={prod.imagen} className={styles.imagen} alt={prod.thumbnail}/>
                    <h1 className={styles.Titulo}>{prod.Titulo}</h1>
                    <p className={styles.Categoria}>{prod.Categoria}</p>
                    <h3 className={styles.Precio}>${prod.Precio}</h3>
                    <span>{cantidadproductos()}{prod.cantidad}</span>
                    <button className={styles.eliminar}>Eliminar</button>
                </li>
            ))}
        </ul>
    )
}

export default CartContainer