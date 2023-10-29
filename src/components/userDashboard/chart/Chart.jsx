import React, { useEffect, useRef, useState } from 'react';
import './chart.css'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

let tvScriptLoadingPromise;

export default function Chart() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_ede6a') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "FX:EURUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_ede6a"
          });
        }
      }
    },
    []
  );

  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const [result, setResult] = useState(null);

  const handleOutcomeSelection = (outcome) => {
    setSelectedOutcome(outcome);

    setTimeout(() => {
      const randomResult = Math.random() > 0.5 ? 'win': 'loss';
      setResult(randomResult);
    }, 60000)
  }

  return (
    <div className="chart">
      <div className='tradingview-widget-container'>
        <div id='tradingview_ede6a' />
      </div>
      <div className="chartOpt">
        <div className="forex">
          <h3>EUR/USD</h3>
        </div>
        <div className="time">
          <h3>Time</h3>
          <div className="timezone">
            <div className="minus">
              <span>-</span>
            </div>
            <div className="value">
              <input type="number" id="" />
            </div>
            <div className="plus">
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="investment">
          <h3>Investment</h3>
          <div className="invZone">
          <div className="minus">
            <span>-</span>
          </div>
          <div className="value">
            <input type="number" id="" />
          </div>
          <div className="plus">
            <span>+</span>
          </div>
          </div>
        </div>
        <div className="chartPredict">
          <button>
            <span>up</span>
            <AiOutlineArrowUp />
          </button>
          <div className="payout">
            <span>Your payout: 20.08 $</span>
          </div>
          <button>
            <span>down</span>
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}
