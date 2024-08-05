
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"





const NavBar = () => {

  

  return (
    <div className="container-fluid bg-dark p-3 ">
       <nav className="navbar navbar-expand-lg bg-dark gap-3" data-bs-theme="dark">
        <div className="container-fluid p-1">
          <div className="inline-flex ">
            <Link className='logo navbar-brand ' to="/">
              <img className="imgLogo gap-3 d-inline-block align-text-top" src="/cerveza.png" height={30} width={30} alt="logo" />
               <span className="p-2 text-uppercase">Cerveceria Schauer</span>      
            </Link>
          </div>
          
          <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation" >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse gap-3 p-1 align-items-end" id="navbarNav">
            <ul className="navbar-nav block mx-auto p-1 gap-5 text-uppercase">
              <li className="nav-item ">
                <Link className="nav-link active text-uppercase" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/category/cervezas">Cervezas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/category/merchandising">Merchandising</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="ejemplo">Ejemplo</Link>
              </li>
            </ul>
          </div>
          
          <div className="align-middle" id="navbarNav">
            <CartWidget  />
          </div>
        </div>
       </nav>
    </div>
  )
}

export default NavBar