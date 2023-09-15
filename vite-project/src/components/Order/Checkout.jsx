import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useState } from "react"
import "./Checkout.css"


const Checkout = () => {
    const [input, setInput] = useState({
        email: "",
        nombre: "",
        telefono: ""
    })

    const {email, nombre, telefono} = input

    const valorInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const enviar = (e) => {
        e.preventDefault()
        console.log(`${nombre} ${email} ${telefono}`);
    }

    return (
        <form className="container m-auto w-50 mt-3">
            <div className="mb-3">
                <label className="form-label" htmlFor="Email">Correo electronico</label>
                <input type="email" className="form-control" id="Email" name="Email" onChange={valorInput} placeholder="Introduzca su correo"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="Nombre">Nombre</label>
                <input type="text" className="form-control" id="Nombre" name="Nombre" onChange={valorInput} placeholder="Introduzca su nombre"/>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="Telefono">Telefono</label>
                <input type="tel" className="form-control" id="Telefono" name="Telefono" onChange={valorInput} placeholder="Introduzca su numero"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={enviar}>Enviar</button>
        </form>
    )
}

export default Checkout