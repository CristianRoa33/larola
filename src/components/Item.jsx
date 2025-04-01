import React from 'react';
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';
import styles from './Item.module.css';




function Item ({item}) {
    return (
        <Card className={styles.card} style={{ width: '25rem', gap:"25px" }} >
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.category}
            </Card.Text>
            <Button variant="primary" as= {Link} to= {`/product/${item.id}`}>Ver Mas</Button>
          </Card.Body>
        </Card>
      );
}

export default Item;