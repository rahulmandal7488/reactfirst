import { useState } from 'react';
import './App.css'

function App() {
const [counter, setCounter] = useState(0);

const addValue = () => {
  setCounter(counter + 1);
}

const removeValue = () => {
  if(counter <= 0) {
    setCounter(0);
    return;
  }
  setCounter(counter - 1);
}

  return (
    <>
      <div className="counter-container">
        <h1 className="title">✨ Rahul React Counter ✨</h1>
        <div className="counter-box">
          <h2 className="counter-value">{counter}</h2>
            <div className="button-group">
              <button className="btn add" onClick={addValue}>
                ➕ Add
              </button>
              <button className="btn remove" onClick={removeValue}>
                ➖ Remove
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
