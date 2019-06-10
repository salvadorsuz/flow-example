import React, { useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';

const App = () => {

  const [ count, setCount] = useState(0);

  const countFunc = (inc: number) => {
    setCount( count => count + inc);
  }

  return (
    <div>
      <h1>{count}</h1>
      <MyButton countFunc={countFunc} />
    </div>
  );
  
}

export default App;
