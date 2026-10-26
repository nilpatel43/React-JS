import { useState } from 'react'
import Count2 from './Count_Condition'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Counter</h1>
      <br />

      <h2>Count value: {counter}</h2>
      <br />


      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <button onClick={resetValue}>Reset value</button>

      <br />
      <br />
      <Count2 />
    </>
  )
}

export default App
