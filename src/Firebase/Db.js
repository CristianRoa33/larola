import { getFirestore, collection , getDocs, query , where ,doc , getDoc } from "firebase/firestore";
import { app } from "./Config.js"

const db = getFirestore(app)

export const getproductos= async()=> {
const querySnapshot = await getDocs(collection(db, "Productos"));
const Productos= []

querySnapshot.forEach((doc) => {
    Productos.push(doc.data())
})

return Productos
}

export const filtrarCategoria = async (NombreCategoria) => {
const q = query(collection(db, "Productos"), where("Categoria", "==", NombreCategoria))
const querySnapshot = await getDocs(q);
const filtroProductos = []

querySnapshot.forEach((doc) => {
    filtroProductos.push(doc.data())
});

return filtroProductos
}

export const getProducto = async (idDocumento) => {
const docRef = doc(db, "Productos", idDocumento);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    return docSnap.data()
} else {
    console.log("No such document!");
}
}

