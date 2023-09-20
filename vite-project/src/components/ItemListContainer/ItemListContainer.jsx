import { useState,useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {getProducts} from "../../services"

const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {categoryid} = useParams()

    useEffect(() => {

        setIsLoading(true)
        getProducts(categoryid).then((response) => {
            setItem(response)
            setIsLoading(false)
        })
    },[categoryid])



    return(
        <div className="container-fluid">
            <ItemList item={item} loading={isLoading}/>
        </div>
    )
}

export default ItemListContainer    