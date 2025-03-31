import './App.css'
import NavBar from './components/navbar'
import ItemListContainer from './components/itemlistcontainer'
import { BrowserRouter,Routes,Route } from 'react-router'


function App() {


  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:producto' element={<ItemListContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
