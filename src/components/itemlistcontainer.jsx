import React, { } from 'react';
import  { useState, useEffect } from 'react';
import ItemList from './itemlist';
import Item from './item';
import { useParams } from 'react-router';

function ItemListContainer() {
    const [Productos, setProductos] = useState([]); 
    const{producto} = useParams();

useEffect(() => {
    const Inventario = 'https://dummyjson.com/products'
    const ProductoPorCategory=`https://dummyjson.com/products/category/${producto} `
if(producto){
    fetch(ProductoPorCategory)
    .then(res => res.json()) 
    .then(res => setProductos(res.products));
} else{
    fetch(Inventario)
    .then(res => res.json())
    .then(res => setProductos(res.products));
}
},  [producto]);

return (
    <ItemList Productos={Productos} />
);
}

export default ItemListContainer;