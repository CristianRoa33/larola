import React from "react";
import { useState , useContext } from "react";
import styles from "./ItemCount.module.css"
import { CartContext } from "../../Context/CartContext";


function ItemCount ( {product}) {
    const [count, setCount] = useState(0)
    const {addProduct} = useContext(CartContext)

    const handleSub = () => { setCount(count - 1)}
    const handleAdd = () => {setCount(count + 1)}

    const handleAddProduct = ()   => addProduct ({...product , Cantidad: count})
        return (    
        <div className={styles.itemCount}>
            <p>{count}</p> 
            <button onClick={handleAdd}>+</button>
            <button onClick={handleAddProduct}>Agregar al Carrito</button> 
            <button onClick={handleSub}disabled={count===1}>-</button>
        </div>
        )
    }

    export default ItemCount