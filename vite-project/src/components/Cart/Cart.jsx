import { useContext } from "react"
import "./Cart.css"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, agregarItem, removerItem, limpiarCarrito} = useContext(CartContext)

    return (
        <div>
            <h1 className="text-center mt-2">Carrito</h1>
            <div className="container-fluid d-flex gap-4">
                {cart.map((elemento) => (
                    <div key={elemento.id} className="card overflow-hidden" style={{maxWidth: "345px", maxHeight: "370px"}}>
                        <img src={`../../../public/${elemento.imageId}`} className="card-img-top img-fluid h-50 p-1 border-bottom" alt={elemento.nombre} />
                        <h5 className="card-title text-center">{elemento.nombre}</h5>
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                            <button className="btn btn-danger btn-circle">-</button>
                            <p className="fw-bold cantidad">{elemento.cantidad}</p>
                            <button className="btn btn-success btn-circle" onClick={() => agregarItem(elemento, 1)}>+</button>
                        </div>
                        <i class="bi bi-trash-fill eliminar" onClick={() => removerItem(elemento)}></i>
                    </div>
                ))}
            </div>
            <button>Vaciar carrito</button>
        </div>
    )
}

export default Cart