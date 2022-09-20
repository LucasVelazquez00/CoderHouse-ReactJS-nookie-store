import React from 'react';
import './navbar-css/NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
      <>
      <nav className="navbar navbar-light nav-style">
    <div className="container-fluid d-flex bd-highlight mb-3">
      <span className="title me-auto p-2 bd-highlight"><Link to='/'>Nookie Store</Link></span>
      <li className='p-2 bd-highlight li-style'><Link to='/category/1'>BUZOS</Link></li>
      <li className='p-2 bd-highlight li-style'><Link to='/category/3'>REMERAS</Link></li>
      <li className='p-2 bd-highlight li-style'><Link to='/category/2'>FALDAS</Link></li>
      <div className='cart-div'><CartWidget/>0</div>
    </div>
  </nav>
  </>
    );
  }

  export default NavBar;
