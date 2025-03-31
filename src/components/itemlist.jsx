import React from "react";
import Item from "./item";

function ItemList ({Productos}) {
return (  
    <div>{Productos.map(item=> < Item item={item} key={item.id} /> )}</div>
)
}

export default ItemList;