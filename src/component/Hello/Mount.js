import React, { useEffect, useState } from "react";
import "./style.css";
const Mount = () => {
  const [caculator, setCaculator] = useState("");
  const getResult = (paramFirst, paramSecond, operator) => {
    switch (operator) {
      case "+": {
        return paramFirst + paramSecond;
        break;
      }
      case "-": {
        return paramFirst - paramSecond;
        break;
      }
      case "*": {
        
        return paramFirst * paramSecond;
        break;
      }
        case "/": {
            if (paramSecond === 0) throw new Error("Devide by zezo")
            return paramFirst / paramSecond;
            
        break;
      }
    }
  };
  useEffect(() => {
    const btn = document.querySelectorAll(".btn");
      btn.forEach((key, item) => {
          if (key.textContent === "=") {
              caculator.forEach(val => {
            })
        }
      key.addEventListener("click", () => {
          setCaculator(prev => prev + key.textContent)
      });
    });
  }, []);
  return (
    <div className="caculator">
      <div className="header">
        <div className="brand">Caculator by Ching</div>
        <div className="display">
          <div className="tren"> {caculator}</div>
          <div className="duoi"></div>
        </div>
      </div>
      <div className="content">
        <div className="left">
          <div className="row">
            <div className="btn">1</div>
            <div className="btn">2</div>
            <div className="btn">3</div>
          </div>
          <div className="row">
            <div className="btn">4</div>
            <div className="btn">5</div>
            <div className="btn">6</div>
          </div>
          <div className="row">
            <div className="btn">7</div>
            <div className="btn">8</div>
            <div className="btn">9</div>
          </div>
          <div className="row">
            <div className="btn">0</div>
            <div className="btn">.</div>
            <div className="btn">=</div>
          </div>
        </div>
        <div className="right">
          <div className="btn">+</div>
          <div className="btn">-</div>
          <div className="btn">*</div>
          <div className="btn">/</div>
          <div className="btn">C</div>
        </div>
      </div>
    </div>
  );
};
export default Mount;
