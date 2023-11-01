import './App.css';
import { useState } from 'react';

import Increment from './components/increment';

function App() {
  console.log("app se render");
  const [counter, setCounter] = useState(0);
  // const [counterReset, setCounterReset] = useState(0)



  return (
    <>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1)
          }}>
          Increment
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter - 1)
          }}>
          Decrement
        </button>
        <div className='reset'>
          <button
            onClick={() => {
              setCounter(counter === 0)
            }}>
            Reset
          </button>
        </div>
      </div>


    </>
  )
}

export default App;
