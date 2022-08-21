import { useSelector } from 'react-redux';
import Square from './components/Square';
import './App.css';


function App() {

  const items = useSelector(state => state.game.items)
  console.log(items)

  return (
    <div className="App">
      <h1>TicTacToe Game</h1>
      <div>
        <div className='col'>
          <Square className='bottom right'/>
          <Square className='bottom right'/>
          <Square className='bottom'/>
        </div>
        <div className='col'>
          <Square className='bottom right'/>
          <Square className='bottom right'/>
          <Square className='bottom'/>
        </div>
        <div className='col'>
          <Square className='right'/>
          <Square className='right'/>
          <Square />
        </div>
      </div>
    </div>
  );
}

export default App;
