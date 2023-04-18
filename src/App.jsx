import { useState } from 'react'
import './styles.scss'
import { Board } from './components/Board'
import { calculateWinner } from './winner';

function App() {

  const [sqaures , setSquares] = useState(Array(9).fill(null));
  const [isXNext , setIsXNext] = useState(false)


  const winner = calculateWinner(sqaures)
  const nextPlayer = isXNext ? 'X' : 'O'
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

  const handleSquareClick = clickedPosition => {
    if(sqaures[clickedPosition] || winner ){
      return
    }
    
    setSquares(currentSquares => {
        return currentSquares.map((squareValue , position)=>{
          if(clickedPosition === position){
            return isXNext ? 'X' : 'O'
          }

          return squareValue;
        })
    })

    setIsXNext((currentIsXNext) => !currentIsXNext)
  }

  return (
    <div className="app">
      <div><h1> { statusMessage } </h1></div>
       
        <Board sqaures = {sqaures} handleSquareClick={handleSquareClick} />
      
    </div>
    
  )
}

export default App
