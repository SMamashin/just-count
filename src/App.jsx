import './App.css'
import { useState } from 'react'

function App() {
  const [Cnt, SetCnt] = useState(0)
  const [Status, SetStatus] = useState('')
  function Increment() {
    SetCnt(Cnt + 1)
    SetStatus("+")
    console.log("+")
  }
  function Decrement() {
    if (Cnt <= 0) {
      SetStatus("can't be less than zero")
      SetCnt(Cnt = 0)
    }
    SetCnt(Cnt - 1)
    SetStatus("-")
  }
  function Reset() {
    SetCnt(0)
    SetStatus("reset to zero")
  }
  return (
    <>
      <h1>{Cnt}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
      <br/>
      <span>{Status}</span>
    </>
  )
}

export default App
