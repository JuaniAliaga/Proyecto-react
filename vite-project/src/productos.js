const productos = [
    {id: '1', nombre: "Teclado Hyperx Alloy Fps",precio: 500, categoria: "Teclados"},
    {id: '2', nombre: "Teclado Hyperx Alloy Origin",precio: 600, categoria: "Teclados"},
    {id: '3', nombre: "Monitor ASUS VA27EHE ",precio: 1000, categoria: "Monitores"},
    {id: '4', nombre: "Monitor AOC G2490VX",precio: 900, categoria: "Monitores"},
    {id: '5', nombre: "Notebook Banghó L4", precio: 1500, categoria: "Notebooks"},
    {id: '6', nombre: "Notebook Tuf F15", precio: 1400, categoria: "Notebooks"},
    {id: '7', nombre: "RTX 3080 Ti ", precio: 2000, categoria: "GPU"},
    {id: '8', nombre: "RTX 3070 GAMING", precio: 1700, categoria: "GPU"},
    {id: '9', nombre: "AMD Ryzen 9 5900X", precio: 1550, categoria: "CPU"},
    {id: '10', nombre: "AMD Ryzen 7 5800X", precio: 1450, categoria: "CPU"}
]

export const obtenerProduto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find((prod) => prod.id === id)
            if(producto){
                resolve(producto)
            }else{
                reject("Todavia no tenes ese producto :c")
            }
        }, 2000)
    })
}

const obtenerProdutos = (categor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const productoFiltrado = categor ? productos.filter((el) => el.categoria === categor) : productos
            resolve(productoFiltrado)
        },2000)
    })
}

export default obtenerProdutos