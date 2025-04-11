import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/Itemlistcontainer'
import { BrowserRouter,Routes,Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {


  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:producto' element={<ItemListContainer/>}></Route>
        <Route path='/product/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
