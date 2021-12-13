import React from 'react';
import './App.scss';
import {Welcome} from './components/Welcome';
import {Game} from './components/Game';
import { Result } from './components/Result';

function App() {
  const [route, setRoute] = React.useState('welcome');
  const [count,setCount] = React.useState(0);
  return (
    <div className="App">
      {route ==='welcome' && <Welcome onRoute={setRoute}/>}
      {route ==='game' && <Game onRoute={setRoute} count={count} setCount={setCount}/>}
      {route ==='result' && <Result count={count} setCount={setCount} onRoute={setRoute}/>}
    </div>
  );
}

export default App;
