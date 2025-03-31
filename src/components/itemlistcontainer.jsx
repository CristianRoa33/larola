import React, { } from 'react';
import  { useState, useEffect } from 'react';
import ItemList from './itemlist';
import Items from './item';
import Item from './item';

function ItemListContainer() {
    const [Items, setItems] = useState([]); 
useEffect(() => {
    const fetchItems = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const Items = await response.json();
        setItems(Items.products);
    };
    fetchItems();
},  []);
return (
    <ItemList Items={Items} />
);
}



export default ItemListContainer;