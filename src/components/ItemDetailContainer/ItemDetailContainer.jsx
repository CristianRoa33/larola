import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducto} from "../../Firebase/Db";

function ItemDetailContainer() {
const [Detalle,setDetalle] = useState() 
const {id} = useParams()

    useEffect(() => {
            getProducto(id)
                .then(Producto=>setDetalle(Producto))
    }, [id]);

return (
    <ItemDetail Detalle={Detalle} />
)
}


export default ItemDetailContainer