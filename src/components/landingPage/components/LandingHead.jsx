import React from 'react';
import { Link } from 'react-router-dom';
import './style/landHead.css';
import bgHead from '../../fintechImg/landHead.png';

function LandingHead() {
  return (
    <header>
      <div className="headImg">
        <img src={bgHead} alt="" />
      </div>
      <div className="headInfo">
        <h1>Innovative platform for smart investments</h1>
        <h3>Register and get $ 10,000 on a demo account for learning to trade</h3>
        <div className="headBtns">
          <Link>Registration</Link>
          <Link>Open demo account</Link>
        </div>
      </div>
    </header>
  )
}

export default LandingHead