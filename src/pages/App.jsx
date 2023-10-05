import React, { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const less = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Count</h1>
      <span>{count}</span>
      <div className="div-down">
        <button className='pink' onClick={less}>Decrementar</button>
        <button className='white' onClick={reset}>Resetar</button>
        <button className='blue' onClick={add}>Incrementar</button>
      </div>
    </div>
  );
}

export default App;
