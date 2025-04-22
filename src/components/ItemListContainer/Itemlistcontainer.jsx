import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/itemList';
import { getproductos , filtrarCategoria } from '../../Firebase/Db';



function ItemListContainer() {
    const [Productos, setProductos] = useState([]); 
    const{producto} = useParams();
useEffect(() => {
    if (producto) {
        filtrarCategoria (producto)
        .then (data=> setProductos(data))
    }else {
        getproductos()
        .then (data=> setProductos(data))
    }
},[producto]);
return (
    <ItemList  Productos={Productos} />
);
}

export default ItemListContainer;