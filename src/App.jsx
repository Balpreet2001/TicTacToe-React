import { useState } from 'react';
import './styles.scss';
import { Board } from './components/Board';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import Histories from './components/Histories';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  const [History, setHistory] = useState(NEW_GAME);
  const [CurrentMove, setCurrentMove] = useState(0);

  const resetHistory = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  const gamingBoard = History[CurrentMove];

  const winner = calculateWinner(gamingBoard.squares);
  console.log({ HistoryLength: History.length, CurrentMove });

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const IsTraversing = CurrentMove + 1 !== currentHistory.length;
      console.log(IsTraversing);

      const lastGamingState = IsTraversing
        ? currentHistory[CurrentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = IsTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <button type="button" onClick={resetHistory} className={`btn-reset ${winner ? 'active' : ''} m-5`}>
        RESET GAME
      </button>
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <h2 className="mt-10 mb-5 text-red-300 font-bold ">
        GAME HISTORY IS GIVEN BELOW
      </h2>
      <Histories
        histories={History}
        moveTo={moveTo}
        CurrentMove={CurrentMove}
      />
    </div>
  );
}

export default App;
