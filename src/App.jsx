import { useState } from 'react';
import './App.css'

function App() {
// let counter = 5;
const [counter, setCounter] = useState(0);

const addValue = () => {
  if(counter <= 19) {
    setCounter(counter + 1);
  } else {
    setCounter(20);
    alert("Counter value should not be greater than 20");
    return;
  }
}

const removeValue = () => {
  if(counter <= 0) {
    setCounter(0);
    alert("Counter value should not be less than 0");
    return;
  }
  setCounter(counter - 1);
}

  return (
    <>
      <h1>Rahul React Js</h1>
      <h2>Counter Value: {counter} </h2>

      <button onClick={addValue}>Add Value </button><br />
      <button onClick={removeValue}>Remove Value </button> <br />
    </>
  )
}

export default App
