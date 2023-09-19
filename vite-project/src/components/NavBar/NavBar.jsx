import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white col-md-2 text-center">GAMER KEY</Link>
                <div className="col-md-9 d-flex align-items-center">
                    <input className="form-control rounded-0" type="search" placeholder="Search" aria-label="Search"></input>
                </div>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </nav>
        <div className="categorias container-fluid d-flex justify-content-center align-items-center">
            <h2 className="border-end text-light fs-4">Categorias</h2>
            <ul className="list-group list-group-horizontal m-1">
                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/Perifericos" className="link-underline link-underline-opacity-0 text-light links">Perifericos</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/Monitores" className="link-underline link-underline-opacity-0 text-light links">Monitores</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/Notebooks" className="link-underline link-underline-opacity-0 text-light links">Notebooks</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/GPU" className="link-underline link-underline-opacity-0 text-light links">Placas de video</NavLink></li>

                <li className="list-group-item border-0 rounded-0"><NavLink to="/category/CPU" className="link-underline link-underline-opacity-0 text-light links">Procesadores</NavLink></li>

            </ul>
        </div>
        </>
    )   
}

export default NavBar;