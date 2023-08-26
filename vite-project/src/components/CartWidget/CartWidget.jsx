
const CartWidget = () =>{
    return(
        <div>
            <button className="btn btn-outline-primary text-light position-relative">
            <i className="bi bi-cart fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
            <span className="visually-hidden">Prodcutos que tiene en el carrito</span>
            </span>
            </button>
        </div>
        )
    }

export default CartWidget