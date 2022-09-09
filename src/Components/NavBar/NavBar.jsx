import './navbar-css/NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
      <>
      <nav className="navbar navbar-light nav-style">
    <div className="container-fluid d-flex bd-highlight mb-3">
      <span className="title me-auto p-2 bd-highlight">Nookie Store</span>
      <li className='p-2 bd-highlight li-style'>PRENDAS</li>
      <li className='p-2 bd-highlight li-style'>CALZADOS</li>
      <li className='p-2 bd-highlight li-style'>ACCESORIOS</li>
      <div className='cart-div'><CartWidget/>0</div>
    </div>
  </nav>
  </>
    );
  }

  export default NavBar;

  