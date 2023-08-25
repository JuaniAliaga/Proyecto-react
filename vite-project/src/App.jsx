import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <NavBar />

    <Routes>
        <Route path='/'  element={<ItemListContainer />}/>

        <Route path='/category/:id' element={<ItemListContainer />}/> 

    </Routes>
    </>
  )
}

export default App
