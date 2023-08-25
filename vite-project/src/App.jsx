import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
    <NavBar />

    <Routes>
        <Route path='/'  element={<ItemListContainer />}/>

        <Route path='/category/:categoryid' element={<ItemListContainer />}/> 

        <Route path='/item/:id' element={<ItemDetailContainer />}/>
    </Routes>
    </>
  )
}

export default App
