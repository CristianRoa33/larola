import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"


function ItemList ({Productos}) {
return (  
    <section> 
        <h1 className={styles.titulo}>Nuestros Productos</h1>
            <div className={styles.container}>
                {Productos.map(item=> <Item item={item} key={item.id} /> )}
            </div>
    </section>
)
}

export default ItemList;