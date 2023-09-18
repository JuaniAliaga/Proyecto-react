
const ItemDetail = ({item, loading, agregarItem}) => {

    if (loading) {
        return <h2 className="text-center mt-3">Cargando informacion del producto...</h2>
    }

    if (!item) {
        return <h2 className="text-center mt-3 text-danger">Todavia no tenemos ese producto</h2>
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="card mt-4" style={{maxWidth: "550px"}}>
            <img src={`../../../public/${item.imageId}`} className="card-img-top img-fluid h-50 p-1" alt={item.nombre} />
            <h1 className="card-title text-center mt-2">{item.nombre}</h1>
            <span className="card-text text-start ms-3 mt-2 mb-2">${item.precio}</span>
            <p className="card-text text-center fw-bold mt-2 mb-4">{item.descripcion}</p>
            <button onClick={() => agregarItem(item, 1)} className="btn btn-success w-50 m-auto mb-1">Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemDetail