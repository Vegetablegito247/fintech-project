import React from 'react';
import logoImg from '../../fintechImg/candlestick.png';
import './navbaruser.css';

function NavbarUser() {
  return (
    <nav className='navUser'>
        <div className="logo">
            <h3>FinTech</h3>
            <img src={logoImg} alt="" />
        </div>
        <div className="funds">
            <div className="amount">
                <span>$100</span>
            </div>
            <div className="transaction">
                <button>Deposit</button>
                <button>Withdrawal</button>
            </div>
        </div>
    </nav>
  )
}

export default NavbarUser