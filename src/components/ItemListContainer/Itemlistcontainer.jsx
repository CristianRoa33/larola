import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/itemList';



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
    <ItemList  Productos={Productos} />
);
}

export default ItemListContainer;