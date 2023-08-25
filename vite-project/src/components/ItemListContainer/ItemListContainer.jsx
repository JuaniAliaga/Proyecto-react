import { useState,useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {obtenerProdutos} from "../../productos"

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {

        setIsLoading(true)
        obtenerProdutos(id).then((response) => {
            setItem(response)
            setIsLoading(false)
        })
    },[id])



    return(
        <div className="container-fluid">
            <ItemList item={item} loading={isLoading}/>
        </div>
    )
}

export default ItemListContainer    