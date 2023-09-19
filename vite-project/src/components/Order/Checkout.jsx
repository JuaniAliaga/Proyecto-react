import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { useState } from "react"
import "./Checkout.css"
import { calcularTotal, mapeoDeCarritoParaOrders } from "../../utils"
import { serverTimestamp } from "firebase/firestore"
import { crearOrders } from "../../productos"


const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState({
        email: "",
        nombre: "",
        telefono: ""
    })

    const {email, nombre, telefono} = input

    const {cart, limpiarCarrito} = useContext(CartContext)

    const total = calcularTotal(cart)

    const handleCheckout = () =>{
        const order = {
            buyer: {
                nombre,
                email,
                telefono
            },
            items:mapeoDeCarritoParaOrders(cart),
            total,
            date: serverTimestamp()
        }
        setIsLoading(true)
        crearOrders(order).then((docRef) => {
            setOrderId(docRef.id)
            setIsLoading(false)
            limpiarCarrito()
        })
    }

    const valorInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault()
        handleCheckout()
    }

    return (
        <>

        {isLoading && <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                            <div class="spinner-border" role="status"></div>
                        </div>}

        {orderId && <div>
            <h1 className="text-center mt-3">Compra finalizada</h1>
            <p className="orden">Su numero de orden es: {orderId}</p>
            </div>}
        
        {!orderId && 
        <form className="container m-auto w-50 mt-3">
            <div className="mb-3">
                <label className="form-label" htmlFor="Email">Correo electronico</label>
                <input type="email" className="form-control" id="Email" name="email" onChange={valorInput} placeholder="Introduzca su correo" required/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="Nombre">Nombre</label>
                <input type="text" className="form-control" id="Nombre" name="nombre" onChange={valorInput} placeholder="Introduzca su nombre" required/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="Telefono">Telefono</label>
                <input type="tel" className="form-control" id="Telefono" name="telefono" onChange={valorInput} placeholder="Introduzca su numero" required/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={enviar}>Finalizar compra</button>
        </form>
        }
        </>
    )
}

export default Checkout