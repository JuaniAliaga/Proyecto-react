import { useState } from "react"
import CartContext from "./CartContext"

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const estaEnCarrito = (id) => {
        const itemEnCarrito = cart.find((el) => el.id === id)
        return !!itemEnCarrito
    }

    const agregarItem = (producto, cantidad) =>{

        const enCarrito = estaEnCarrito(producto.id)
        
        if (enCarrito) {
            const nuevoCarrito = cart.map((item) => {
                if (item.id === producto.id) {
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidad,
                    };
                }
                return item
            })
            setCart(nuevoCarrito)
        }else{
            setCart([...cart, {...producto, cantidad }])
        }
        console.log(cart)
    }

    const decrementarItem = (producto, cantidad) => {
        if (producto.cantidad === 1) {
            removerItem(producto)
        }else{
            const nuevoCarrito = cart.map((item) => {
                if (item.id === producto.id) {
                    return{
                        ...item,
                        cantidad: item.cantidad - cantidad
                    }
                }
                return item
            })
            setCart(nuevoCarrito)
        }
    }   

    const removerItem = (producto) => {
        const nuevoCarrito = cart.filter(el => el.id !== producto.id)
        setCart(nuevoCarrito)
    }


    const limpiarCarrito = () => {
        setCart([])
    }


    return(
        <CartContext.Provider value={{cart, agregarItem, removerItem, limpiarCarrito, estaEnCarrito, decrementarItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider