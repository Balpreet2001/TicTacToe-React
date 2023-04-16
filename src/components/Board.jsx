import { useState } from 'react'
import Square from './Square'


export const Board = () => {

  const [sqaures , setSquares] = useState(Array(9).fill(null));
  const [isXNext , setIsXNext] = useState(false)

  const handleSquareClick = clickedPosition => {
    if(sqaures[clickedPosition]){
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

  const renderSquare = position => {
    return(
      <Square
      value={sqaures[position]}
      onClick={()=>handleSquareClick(position)}
      />
    );
  }
  
  
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
