import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
const [Detalle,setDetalle] = useState() 
const {id} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(id=> setDetalle(id));
    }, [id]);

return (
    <ItemDetail Detalle={Detalle} />
)
}


export default ItemDetailContainer