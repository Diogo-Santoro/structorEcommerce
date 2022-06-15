import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                       <Link to={"produtos"}> <a className="nav-link" href="#">Lista de produtos<span className="sr-only"></span></a></Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"form"}> <a className="nav-link" href="#">Criar produto</a> </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
