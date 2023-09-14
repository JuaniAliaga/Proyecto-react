export const cantidadCarrito = (carrito) => {
    return carrito.reduce((acc, act) => acc + act.cantidad, 0)
}