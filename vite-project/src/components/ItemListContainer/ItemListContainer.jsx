import { useState,useEffect } from "react"
import ItemList from "./ItemList"
import obtenerProdutos from "../../productos"

const ItemListContainer = () => {
    const [item, setItem] = useState([])

    obtenerProdutos().then((response) => {
        setItem(response)
    })

    return(
        <div className="container-fluid">
            <ItemList item={item}/>
        </div>
    )
}

export default ItemListContainer    