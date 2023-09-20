export const quantityCart = (carrito) => {
    return carrito.reduce((acc, act) => acc + act.cantidad, 0)
}

export const totalProduct = (producto) => {
    return producto.precio * producto.cantidad
}

export const calculateTotal = (total) => {
    let totalCalculado = total.reduce((acc, act) => acc + act.precio * act.cantidad , 0)
    return totalCalculado.toLocaleString()
}

export const cartMappingForOrders = (carrito) => {
    return carrito.map((item) => ({
        id: item.id,
        cantidad: item.cantidad,
        precio: item.precio,
        nombre: item.nombre
    }))
}