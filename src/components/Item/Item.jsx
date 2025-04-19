import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';
import styles from "./Item.module.css"




function Item ({item}) {
    return (
        <div className={styles.tarjeta}>
          <img src={item.thumbnail} className= {styles.images}alt="Imagenes" />
          <div className={styles.bodycard}>
            <h1 className={styles.titulo1}>{item.title}</h1>
            <h2 className={styles.titulo2}>{item.category}</h2>
            <Button className={styles.Button} variant="dark" as= {Link} to= {`/product/${item.id}`}>Ver Mas</Button>
          </div>
        </div>
      );
}

export default Item;