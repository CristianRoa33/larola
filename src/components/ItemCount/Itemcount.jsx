import React from "react";
import { useState } from "react";
import styles from "./ItemCount.module.css"

function ItemCount ( ) {
    const [count, setCount] = useState(0)

    const handleSub = () => {
        setCount(count - 1)
    }
    const handleAdd = () => {
        setCount(count + 1)
    }
    return (    
        <div className={styles.itemCount}>
            <p>{count}</p> 
            <button onClick={handleAdd}>+</button>
            <button>Agregar al carrito</button> 
            <button onClick={handleSub}>-</button>
        </div>
        )
    }

    export default ItemCount