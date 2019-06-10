import React, { useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';


const App = () => {

  const [ count, setCount] = useState(0);

  const countFunc = () => {
    setCount( count => count +1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <MyButton name="Click Me" countFunc={countFunc} />
    </div>
  );
  
}

export default App;
