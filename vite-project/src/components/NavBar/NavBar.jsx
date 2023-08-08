import style from "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a href="#" className="navbar-brand text-white col-md-2 text-center">GAMER KEY</a>
                <div className="container d-flex col-md-9">
                    <input className="form-control rounded-0" type="search" placeholder="Search" aria-label="Search"></input>
                </div>
                <CartWidget />
            </div>
        </nav>
        <div className="categorias container-fluid d-flex justify-content-center align-items-center">
            <h2 className="border-end text-light fs-4">Categorias</h2>
            <ul className="list-group list-group-horizontal m-1">
                <li className="list-group-item border-0 rounded-0"><a href="#" className="link-underline link-underline-opacity-0 text-light">Perifericos</a></li>

                <li className="list-group-item border-0 rounded-0"><a href="#" className="link-underline link-underline-opacity-0 text-light">Monitores</a></li>

                <li className="list-group-item border-0 rounded-0"><a href="#" className="link-underline link-underline-opacity-0 text-light">Notebooks</a></li>

                <li className="list-group-item border-0 rounded-0"><a href="#" className="link-underline link-underline-opacity-0 text-light">Pc de escritorio</a></li>

                <li className="list-group-item border-0 rounded-0"><a href="#" className="link-underline link-underline-opacity-0 text-light">Placas de video</a></li>

                <li className="list-group-item border-0 rounded-0"><a href="#" className="link-underline link-underline-opacity-0 text-light">Procesadores</a></li>

            </ul>
        </div>
        <ItemListContainer greeting="Hola, bienvenido a nuestra tienda de hardware"/>
        </>
    )   
}

export default NavBar;