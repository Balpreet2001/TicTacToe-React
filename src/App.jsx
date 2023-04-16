import { useState } from 'react'
import './styles.scss'
import { Board } from './components/Board'

function App() {
  
  const [counter, setCounter] = useState(1)

  console.log("hello")

  const onBtnclick =() =>{
        setCounter(currentCounter =>{
          return currentCounter +1
        })
  }

  return (
    <div className="app">
       
        <Board />

        <div>
          <button onClick={onBtnclick}>
            I am a clicky button
          </button>
          <div>{counter}</div>
        </div>
      
    </div>
    
  )
}

export default App
