import React from "react";
import Items from "./item";


function ItemList ({Items}) {
return (  
    <div>{Items.map(item=> <Item item={item} key={item.id} />)}</div>
)
}

export default ItemList;