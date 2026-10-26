import { useState } from 'react'
import './App.css'

function Count2() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {

    if (counter < 5) {
        setCounter(counter + 1)      
    } else {
        alert("Count Max 5")  
    }
  }

  const removeValue = () => {

    if (counter > -5) {
        setCounter(counter - 1)
    } else {
        alert("Count Min -5")  
    }
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
      <h1>Counter_Condition</h1>
      <br />

      <h2>Count value: {counter}</h2>
      <br />


      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <button onClick={resetValue}>Reset value</button>
    </>
  )
}

export default Count2
