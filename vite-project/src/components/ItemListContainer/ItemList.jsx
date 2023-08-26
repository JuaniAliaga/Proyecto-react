import { Link } from "react-router-dom"

const ItemList = ({item,loading}) => {
    if (loading) {
        return <h2 className="text-center mt-3">Cargando productos...</h2>
    }
    return (
        <div>
            <h2>Productos</h2>
            <div className="card-container" style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                {item.map((p) => (
                    <div key={p.id} className="card" style={{flex: "0", minWidth: "360px"}}>
                        <h5 className="card-tittle text-center"><Link to={`/item/${p.id}`}>{p.nombre}</Link></h5>
                        <p className="card-text ms-1 mb-2 fw-bold text-start">${p.precio}</p>
                        <a href="#" className="btn btn-primary w-50 m-auto mb-1">Comprar</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList