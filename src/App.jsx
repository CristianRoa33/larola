import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/Itemlistcontainer'
import { BrowserRouter,Routes,Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/CheckOut'


function App() {


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
