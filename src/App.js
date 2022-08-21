import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Square from './components/Square';
import { changeCursor } from './redux/gameSlice';
import './App.css';

const clearState = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "];

function App() {

  const dispatch = useDispatch();
  const items = useSelector(state => state.game.items)
  const cursor = useSelector(state => state.game.cursor)

  const [gameState, setGameState] = useState(clearState);

  function handleClick(i) {
    dispatch(changeCursor())
    let strings = Array.from(gameState);
    strings[i] = cursor ? 'X' : 'O';
    setGameState(strings)


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
