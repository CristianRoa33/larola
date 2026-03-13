import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import styles from "./CartItem.module.css"

function CartItem ({prod})   {
    const {deleteProduct} = useContext(CartContext)
    return (
        <div className={styles.cartItem}>
            <img src={prod.imagen} className={styles.imagen} alt={prod.thumbnail}/>
            Producto: {prod.Titulo}    Cantidad {prod.Cantidad} Precio {prod.Precio}
            <button className={styles.eliminar} onClick={() => deleteProduct(prod.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem