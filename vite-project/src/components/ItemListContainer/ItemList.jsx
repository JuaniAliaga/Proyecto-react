import { Link } from "react-router-dom"
import "./ItemList.css"

const ItemList = ({ item, loading }) => {
    if (loading) {
        return <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <div class="spinner-border" role="status"></div>
        </div>
    }
    if (item.length === 0) {
        return <h2 className="text-center mt-3 text-danger">Categoria invalida...</h2>
    }

    return (
        <div>
            <h2 className="text-center mt-2">Productos</h2>
            <div className="card-container d-flex flex-wrap gap-3 justify-content-center">
                {item.map((p) => (
                    <div key={p.id} className="card overflow-hidden" style={{maxWidth: "345px", maxHeight: "370px"}}>
                        <img src={`../../../public/${p.imageId}`} className="card-img-top img-fluid h-50 p-1" style={{ boxShadow: '0px 5px 10px -6px rgba(0,0,0,0.85)' }} alt={p.nombre} />
                        <div className="card-body">
                        <h5 className="card-title text-center mt-2">{p.nombre}</h5>
                        <p className="card-text text-start fw-bold ms-3">${p.precio}</p>
                        <Link to={`/item/${p.id}`} className="btn btn-primary w-50 mx-auto mb-1">Detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList