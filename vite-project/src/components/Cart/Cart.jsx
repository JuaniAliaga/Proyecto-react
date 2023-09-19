import { useContext } from "react"
import "./Cart.css"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import { totalProducto, calcularTotal } from "../../utils"


const Cart = () => {

    const { cart, agregarItem, removerItem, limpiarCarrito, decrementarItem} = useContext(CartContext)
    
    const total = calcularTotal(cart)

    return (
        <div>
            <h1 className="text-center mt-2">Carrito</h1>
            <div className="container-fluid d-flex justify-content-center gap-4 flex-wrap">
                {cart.map((elemento) => (
                    <div key={elemento.id} className="card overflow-hidden" style={{maxWidth: "345px", maxHeight: "370px"}}>
                        <img src={`../../../public/${elemento.imageId}`} className="card-img-top img-fluid h-50 p-1 border-bottom" alt={elemento.nombre} />
                        <h5 className="card-title text-center">{elemento.nombre}</h5>
                        <p className=" ms-2 fw-bold">${totalProducto(elemento)}</p>
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                            <button className="btn btn-danger btn-circle" onClick={() => decrementarItem(elemento, 1)}>-</button>
                            <p className="fw-bold cantidad">{elemento.cantidad}</p>
                            <button className="btn btn-success btn-circle" onClick={() => agregarItem(elemento, 1)}>+</button>
                        </div>
                        <i class="bi bi-trash-fill eliminar" onClick={() => removerItem(elemento)}></i>
                    </div>
                ))}
            </div>

            {cart.length > 0 ? (
            <div className="container-fluid mt-3 mb-3 fw-bold fs-4 text-center">
                <p>Su total es de: ${total}</p>
                <div className="contenedor-btn">
                    <button className="btn btn-danger vaciar-carrito" onClick={() => limpiarCarrito()}><i className="bi bi-cart-x"></i> Vaciar Carrito</button>
                    <Link to={"/checkout"}><button className="btn btn-primary finalizar-compra">Continuar <i className="bi bi-cart-fill"></i></button></Link>
                </div>
            </div>)
            : <p className="carrito-vacio">Todavia no hay productos en el carrito...</p>}


        </div>
    )
}

export default Cart