import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartProvider from './context/CartProvider'

function App() {

  return (
    <CartProvider>
    <NavBar />

    <Routes>
        <Route path='/'  element={<ItemListContainer />}/>

        <Route path='/category/:categoryid' element={<ItemListContainer />}/> 

        <Route path='/item/:id' element={<ItemDetailContainer />}/>
    </Routes>
    </CartProvider>
  )
}

export default App
