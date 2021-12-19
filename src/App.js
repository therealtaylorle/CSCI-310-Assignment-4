import { React, useState } from 'react';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operator = ['/', '*', '+', '-', '.'];
  
  const update = value => {
    if(
      operator.includes(value) && calc == '' || operator.includes(value) && operator.includes(calc.slice(-1))){
      return;
    }

    setCalc(calc + value);

    if (!operator.includes(value)){
      setResult(eval(calc + value).toString());
    }
    
  }

  const numCreate = () => {
    const num = [];

    for(let i = 1; i < 10; i++){
      num.push(
          <button 
            onClick={() => update(i.toString())} key = {i}>{i}
          </button>
        )
    }

    return num;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const clr = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, 0);

    setCalc(value);
  }

  return (
    <div className="App">
      <div className = "calculator">
        <div className = "display">
          { result ? <span>({result})</span> : ''}&nbsp; {calc || "0"}
        </div> 

        <div className = "operators">
          <button onClick={() => update('/')}>/</button>
          <button onClick={() => update('+')}>+</button>
          <button onClick={() => update('-')}>-</button>
          <button onClick={() => update('*')}>*</button>

          <button onClick={clr}>C</button>
        </div>

        <div className = "digits">
          { numCreate() }
          <button onClick={() => update('0')}>0</button>
          <button onClick={() => update('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>    
    </div>
  );
}

export default App;