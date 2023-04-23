const Square = ( {value, onClick , iswinningSquare} ) => {
  const winnerStyle = value === 'X' ? 'text-green' : 'text-orange'
  const squareStyle = iswinningSquare ? 'winning ' : ''
  return (
    <button className={`square ${squareStyle} ${winnerStyle}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;