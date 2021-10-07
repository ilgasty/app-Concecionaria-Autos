import React from 'react'
import{Link,NavLink} from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">

    <div className="flex-row d-md-block d-lg-none">
        <Link id="btnUsuario_mobile" className="btn-mi-carrito pr-2" to="/" role="button" >
            <i className="fal fa-user fa-1x ml-3"></i>
        </Link>
        <Link id="btnMiCarrito_mobile" className="btn-mi-carrito d-none" to="/">
            <i className="fa fa-shopping-basket fa-1x d-none"></i><i className="fal fa-shopping-bag fa-1x"></i>
            <span className="numeritos bg-danger">0</span>
        </Link>
    </div>
    <div className="d-flex justify-content-center d-md-block d-lg-none">
        <Link to="/">
            <img id="imgLogoMobile" src="https://files.kuder.com.ar/generales/uqJekoBYsBFbF41TgD8uSohMmrGtSqL5PHoM8BzC.png" width="90" alt="" />

        </Link>
    </div>

    <button className="navbar-toggler border-0 nav-text" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fal fa-bars fa-lg"></span>
    </button>

    <div className="collapse navbar-collapse"  >
        <div className="navbar-nav">

                <NavLink exact activeClassName="active" className="nav-link" to="/">GEEN CARS</NavLink>
            
                <NavLink exact activeClassName="active" className="nav-link" to="/About">About</NavLink>
            
                <NavLink exact activeClassName="active" className="nav-link" to="/Login">Login</NavLink>
            </div>
    </div>
</nav>
  )
}
