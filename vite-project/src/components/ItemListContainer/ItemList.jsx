

const ItemList = ({item}) => {
    return (
        <div>
            <h2>Productos</h2>

            <div className="contenedor">
                {item.map((p) => (
                    <div key={p.id} className="card">
                        <h5 className="card-tittle">{p.nombre}</h5>
                        <p className="card-text">${p.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList