import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { useState } from "react"
import "./Checkout.css"
import { calcularTotal, mapeoDeCarritoParaOrders } from "../../utils"
import { serverTimestamp } from "firebase/firestore"
import { crearOrders } from "../../productos"


const Checkout = () => {
    const [orderId, setOrderId] = useState(null)
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
        crearOrders(order).then((docRef) => {
            setOrderId(docRef.id)
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
        {orderId && <p className="orden">Su numero de orden es: {orderId}</p>}
        {!orderId && 
        <form className="container m-auto w-50 mt-3">
            <div className="mb-3">
                <label className="form-label" htmlFor="Email">Correo electronico</label>
                <input type="email" className="form-control" id="Email" name="email" onChange={valorInput} placeholder="Introduzca su correo"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="Nombre">Nombre</label>
                <input type="text" className="form-control" id="Nombre" name="nombre" onChange={valorInput} placeholder="Introduzca su nombre"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="Telefono">Telefono</label>
                <input type="tel" className="form-control" id="Telefono" name="telefono" onChange={valorInput} placeholder="Introduzca su numero"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={enviar}>Enviar</button>
        </form>
        }
        </>
    )
}

export default Checkout