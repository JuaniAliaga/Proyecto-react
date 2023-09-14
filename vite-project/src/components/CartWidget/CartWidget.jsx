import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { cantidadCarrito } from "../../utils"

const CartWidget = () =>{
const {cart} = useContext(CartContext)

console.log(cart);

    return(
        <div>
            <button className="btn btn-outline-primary text-light position-relative me-1">
            <i className="bi bi-cart fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cantidadCarrito(cart)}
            <span className="visually-hidden">Productos que tiene en el carrito</span>
            </span>
            </button>
        </div>
        )
    }

export default CartWidget