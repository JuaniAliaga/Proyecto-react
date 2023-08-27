

const ItemDetail = ({item, loading}) => {

    if (loading) {
        return <h2 className="text-center mt-3">Cargando informacion del producto...</h2>
    }

    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Todavia no tenemos ese producto</h2>
    }

    return (
        <div>
            <h1>{item.nombre}</h1>
            <p>{item.precio}</p>
        </div>
    )
}

export default ItemDetail