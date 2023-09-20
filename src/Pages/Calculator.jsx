import { useState } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Calculator = () => {



  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      setExpression(eval(expression));
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <CalculatorStyle>
      <Navbar/>
      <div className="calculator">
        
        <input type="text" value={expression} readOnly />
        <div className="buttons">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={evaluateExpression}>=</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={clearExpression}>C</button>
        </div>
      </div>
    </CalculatorStyle>
  );
};

export default Calculator;

const CalculatorStyle = styled.div`
  .calculator {
    width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .calculator input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 24px;
    text-align: right;
  }

  .buttons button {
    width: 50px;
    height: 50px;
    font-size: 24px;
    margin: 5px;
  }
`;
