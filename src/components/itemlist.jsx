import React from "react";
import Item from "./Item";
import styles from "../components/ItemList.module.css"


function ItemList ({Productos}) {
return (  
    <container className={styles.container}>
        {Productos.map(item=> < Item item={item} key={item.id} /> )}
    </container>
)
}

export default ItemList;