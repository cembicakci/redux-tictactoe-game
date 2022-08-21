import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from './components/Square';
import { changeCursor } from './redux/gameSlice';
import './App.css';

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {

  const dispatch = useDispatch();
  const cursor = useSelector(state => state.game.cursor)
  const [gameState, setGameState] = useState(clearState);
  const [count, setCount] = useState(0);

  function handleClick(i) {
    let strings = Array.from(gameState);
    if (strings[i]) return;
    strings[i] = cursor ? 'X' : 'O';
    setGameState(strings)
    dispatch(changeCursor())
    setCount(count + 1);

  }

  const clearGame = () => {
    setGameState(clearState)
  }

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      setTimeout(() => {
        clearGame();
        setCount(0)
        alert(`${winner} won the Game!`)
      }, 200)
      return;
    }
    if (count === 9) {
      setTimeout(() => {
        clearGame();
        setCount(0)
        alert('It is a draw!')
      }, 200)

    }
  }, [gameState])

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <h1>TicTacToe Game</h1>
      <div>
        <div className='col'>
          <Square className='bottom right' state={gameState[0]} onClick={() => handleClick(0)} />
          <Square className='bottom right' state={gameState[1]} onClick={() => handleClick(1)} />
          <Square className='bottom' state={gameState[2]} onClick={() => handleClick(2)} />
        </div>
        <div className='col'>
          <Square className='bottom right' state={gameState[3]} onClick={() => handleClick(3)} />
          <Square className='bottom right' state={gameState[4]} onClick={() => handleClick(4)} />
          <Square className='bottom' state={gameState[5]} onClick={() => handleClick(5)} />
        </div>
        <div className='col'>
          <Square className='right' state={gameState[6]} onClick={() => handleClick(6)} />
          <Square className='right' state={gameState[7]} onClick={() => handleClick(7)} />
          <Square state={gameState[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
