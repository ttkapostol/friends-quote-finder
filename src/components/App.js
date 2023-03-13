import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(objectToExport.get('bestQuotes', quotes));
 
 
 
 
 
 
  return <div className="App">{
  <header className='header'>
    <h1 className='header__title'>Frases de Friends</h1>
  </header>
  
  }</div>;
}

export default App;
