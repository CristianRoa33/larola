import React from "react";
import ItemCount from "../ItemCount/Itemcount";
import styles from "./ItemDetail.module.css";

function ItemDetail ({Detalle}) {
    return(
        <div className={styles.container}>
        <h1>Detalle del Producto</h1>
        <img src={Detalle?.thumbnail}  className= {styles.thumbnail} alt="Detalle?.title" />
        <h2>{Detalle?.title}</h2>
        <h3>{Detalle?.description}</h3>
        <p>{Detalle?.category}</p>
        <p>${Detalle?.price}</p>
        <ItemCount/>
    </div>
    )
}

export default ItemDetail

    