import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6'
import './style/footer.css';

function Footer() {
  return (
    <footer>
        <div className="footHead">
            <div className="footLogo">
                <h3>Fintech</h3>
            </div>
            <ul className="footsocials">
                <li><FaFacebookSquare /></li>
                <li><FaInstagram /></li>
                <li><FaSquareTwitter /></li>
            </ul>
        </div>
        <div className="footMain">
            <div className="footlist">
                <h3>Affiliates</h3>
                <ul className="footItems">
                    <li>Sign up</li>
                </ul>
            </div>
            <div className="footlist">
                <h3>About us</h3>
                <ul className="footItems">
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="footlist">
                <h3>FAQ</h3>
                <ul className="footItems">
                    <li>General questions</li>
                    <li>Financial questions</li>
                    <li>Verifications</li>
                </ul>
            </div>
            <div className="footlist">
                <h3>Regulations</h3>
                <ul className="footItems">
                    <li>Privacy policy</li>
                    <li>Payment policy</li>
                    <li>Service agreement</li>
                    <li>Risk disclosure</li>
                    <li>Rules of trading operation</li>
                    <li>Non-trading operations regulations</li>
                </ul>
            </div>
        </div>
        <div className="footButt">
            <p>Copyright © 2023 FinTech. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer