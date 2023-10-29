import React from 'react';
import './style/nav.css';
import logoImg from '../fintechImg/candlestick.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="logo">
            <h3>FinTech</h3>
            <img src={logoImg} alt="" />
        </div>
        <div className="logs">
            <NavLink>Log in</NavLink>
            <NavLink>Sign up</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;