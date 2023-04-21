const StatusMessage = ({winner , gamingBoard }) => {

     const {squares , isXNext} = gamingBoard

  const noMovesLeft = squares.every(squareValue => squareValue != null)   
  const nextPlayer = isXNext ? 'X' : 'O'
     
  const renderStatusMessage = () =>{
     if(winner){
          return <div> winner is <span className={isXNext ? 'text-green-500' : 'text-orange-500' }>{winner}</span></div>
     }
     if(!winner && noMovesLeft){
          return <div> <span className="text-green">O</span> and <span className="text-orange">X</span> tied</div>
     }
     if(!winner && !noMovesLeft){
          return <div>Next player is <span className={isXNext ? 'text-green-500' : 'text-orange-500' }>{nextPlayer}</span></div>
     }
  }
  return (
    <div className="status-message">{renderStatusMessage()}</div>
  )
}

export default StatusMessage