import React, { } from 'react';
import  { useState, useEffect } from 'react';
import ItemList from './itemlist';
import Item from './item';
import { useParams } from 'react-router';

function ItemListContainer() {
    const [Productos, setProductos] = useState([]); 
    const{producto} = useParams();
    console.log(producto);
useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => setProductos(res.products));
},  []);

//fetch(`https://dummyjson.com/products/category/${} `)
//.then(res => res.json())
//.then(console.log);

return (
    <ItemList Productos={Productos} />
);
}



export default ItemListContainer;