import React from "react";
import ItemCount from "../ItemCount/Itemcount";
import styles from "./ItemDetail.module.css";

function ItemDetail ({Detalle}) {
    return(
        <div className={styles.container}>
        <h1>Detalle del Producto</h1>
        <img src={Detalle?.imagen}  className= {styles.imagen} alt="Detalle?.title" />
        <h2>{Detalle?.Titulo}</h2>
        <h3>{Detalle?.Descripcion}</h3>
        <p>{Detalle?.Categoria}</p>
        <p>${Detalle?.Precio}</p>
        <ItemCount product= {Detalle}/>
    </div>
    )
}

export default ItemDetail

    