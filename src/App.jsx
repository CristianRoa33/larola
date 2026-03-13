import './App.css'
import React, { useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer'
import { BrowserRouter,Routes,Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/CheckOut'
import testFirebaseConnection from './Firebase/TestConnection'


function App() {
  // Prueba de conexión a Firebase en desarrollo
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log("📋 Variables de entorno:", {
        API_KEY: import.meta.env.VITE_FIREBASE_API_KEY ? "✅ Cargada" : "❌ No cargada",
        PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID ? "✅ Cargada" : "❌ No cargada"
      });
      testFirebaseConnection();
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/Categoria/:producto' element={<ItemListContainer/>}></Route>
        <Route path='/Product/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<CartContainer/>}></Route>
        <Route path='/Checkout' element={<Checkout/>}/></Routes>
    </BrowserRouter>
  )
}

export default App
