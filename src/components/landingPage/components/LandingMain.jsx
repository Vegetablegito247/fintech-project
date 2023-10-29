import React from 'react';
import { Link } from 'react-router-dom';
import { FcCandleSticks } from 'react-icons/fc';
import { BiLogoPlayStore } from 'react-icons/bi';
import { AiFillFileText, AiOutlineDown } from 'react-icons/ai';
import './style/landMain.css';
import logoImg from '../../fintechImg/candlestick.png';
import provide1 from '../../fintechImg/exp1.png';
import provide2 from '../../fintechImg/exp2.png';
import provide3 from '../../fintechImg/exp3.png';
import provide4 from '../../fintechImg/exp4.png';
import mobile from '../../fintechImg/mobile.png';
import trade1 from '../../fintechImg/trade1.png';
import trade2 from '../../fintechImg/trade2.png';
import trade3 from '../../fintechImg/trade3.png';
import readyToTrade from '../../fintechImg/readyToTrade.png';

function LandingMain() {
  // provide list
  const provide = [
    {
      id: 1,
      head: 'Convenient trading interface',
      text: 'We created the most simple and comfortable interface that does not distract from the main thing - from trading',
      img: provide1
    },
    {
      id: 2,
      head: 'Integrated signals',
      text: 'Approach the strategy thoughtfully - the most precise and innovative signals with an accuracy of 87% will help you create your own effective strategy',
      img: provide2
    },
    {
      id: 3,
      head: 'Trading indicators',
      text: 'We have gathered the most useful trading indicators. Use them to boost your account balance',
      img: provide3
    },
    {
      id: 4,
      head: 'Perfect speed',
      text: 'Our platform runs on the most modern technology and delivers incredible speed',
      img: provide4
    },
  ];

  const trade = [
    {
      id: 1,
      head: 'Sign up',
      text: 'Open an account for free in just a few minutes',
      links: 'Trade on a demo account',
      img: trade1
    },
    {
      id: 2,
      head: 'Practice',
      text: 'Get your skills better with a demo account and training materials',
      links: 'Start training on a demo account',
      img: trade2
    },
    {
      id: 3,
      head: 'Deposit and Trade',
      text: 'Over 410 instruments and a minimum deposit of $5 for optimal trading',
      links: 'Go to Deposit options',
      img: trade3
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How to learn ?',
      answer: 'Sign up and train on a demo account. It is exactly the same as real trading, but for free.'
    },
    {
      id: 2,
      question: 'Can I trade with my phone',
      answer: 'Our platform runs on the most modern technology and opens in the browser of any computer or mobile phone'
    },
    {
      id: 3,
      question: 'How long does it take to withdraw funds',
      answer: 'On average, the withdrawal procedure takes from one to five days from the date of receipt of the corresponding request of the Client and depends only on the volume of simultaneously processed requests. The company always tries to make payments directly on the day the request is received from the Client.'
    },
    {
      id: 4,
      question: 'What is the minimum deposit amount ?',
      answer: 'The advantage of the Company’s trading platform is that you don’t have to deposit large amounts to your account. You can start trading by investing a small amount of money. The minimum deposit is 10 US dollars.'
    },
    {
      id: 5,
      question: 'What is a trading platform and why is it needed ?',
      answer: 'Trading platform - a software complex that allows the Client to conduct trades (operations) using different financial instruments. It has also accesses to various information such as the value of quotations, real-time market positions, actions of the Company, etc.'
    },
    {
      id: 6,
      question: 'Is there any fee for depositing or withdrawing funds from the account ?',
      answer: 'No. The company does not charge any fee for either the deposit or for the withdrawal operations. However, it is worth considering that payment systems can charge their fee and use the internal currency conversion rate.'
    }
  ]

  return (
    <div className='landMain'>
      {/* what we provide */}
      <div className="userContainer">
        <div className="userExp">
          {
            provide.map((list) => (
              <div key={list.id} className="exp">
                <div className="expImg">
                  <img src={list.img} alt="" />
                </div>
                <div className="expInfo">
                  <h3>{list.head}</h3>
                  <p>{list.text}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="userOpen">
          <Link>Open account now</Link>
        </div>
      </div>

      {/* predict section */}
      <div className="predict">
        <div className="predictInfo">
          <h1>To make more money, <br />
            make the correct prognosis
          </h1>
          <p>Will the price go up or down ?</p>
        </div>
        <div className="predictTable">
          <div className="predictChart">
            <iframe src="" frameborder="0"></iframe>
          </div>
          <div className="predictGuess">
            <div className="guessHead">
              <h3>FinTech</h3>
              <img src={logoImg} alt="" />
            </div>
            <div className="guessOpt">
              <p>
                Click
                on one of the buttons and see the result
              </p>
              <div className="optBtns">
                <button>Price will go up</button>
                <button>Price will come down</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile download section */}
      <div className="mobileAvail">
        <div className="mobileImg">
          <img src={mobile} alt="" />
        </div>
        <div className="mobileInfo">
          <h1>Mobile application is always ready to hand</h1>
          <p>Download our user-friendly application for iPhone or Android and start trading!</p>
          <div className="dwnloadMobile">
            <div className="playStoreIcon">
              <BiLogoPlayStore />
            </div>
            <div className="dwnloadInfo">
              <h6>Available on</h6>
              <h3>Google play</h3>
            </div>
          </div>
        </div>
      </div>

      {/* option to try out trading */}
      <div className="trading">
        <div className="tradeInfo">
          <h1>Start trading</h1>
          <h3>3 steps</h3>
        </div>
        <div className="tradeOption">
          {
            trade.map((list) => (
              <div key={list.id} className="optTrades">
                <div className="optTradeImg">
                  <img src={list.img} alt="" />
                </div>
                <div className="optTradeInfo">
                  <h3>{list.head}</h3>
                  <p>{list.text}</p>
                </div>
                <div className="optTradeLinks">
                  <Link>{list.links}</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* frequently asked questions */}
      <div className="faqs">
        <div className="faqsHead">
          <h1>Frequently asked questions</h1>
        </div>
        <div className="faqsList">
          {
            faqs.map((list) => (
              <div key={list.id} className="faq">
                <div className="question">
                  <div className="quest">
                    <AiFillFileText className='fileIcon' />
                    <h3>{list.question}</h3>
                  </div>
                  <div className="dropIcon">
                    <AiOutlineDown className='drop' />
                  </div>
                </div>
                <div className="answer">
                  <p>{list.answer}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* ready to trade */}
      <div className="startTrading">
        <div className="startHeadImg">
          <img src={readyToTrade} alt="" />
        </div>
        <div className="startInfo">
          <h1>FinTech:Innovation Platform <br />
            Digital Asset Trading</h1>
          <div className="startBtn">
            <Link><FcCandleSticks className='candle'/>Open account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingMain;