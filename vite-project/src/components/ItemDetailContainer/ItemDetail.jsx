
const ItemDetail = ({item, loading, agregarItem}) => {

    if (loading) {
        return <h2 className="text-center mt-3">Cargando informacion del producto...</h2>
    }

    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Todavia no tenemos ese producto</h2>
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="card mt-4">
            <h1 className="card-tittle">{item.nombre}</h1>
            <p className="card-text">${item.precio}</p>
            <button onClick={() => agregarItem(item,1)} className="btn btn-success w-50 m-auto mb-1">Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemDetail