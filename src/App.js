
import './App.css';
import { useState } from 'react';
import Box from './Box';
import Card from './Card';

function App() {
  const [index, setIndex] = useState(0);
  function moveCard(i) { setIndex(i) }
  return (
    <div className="App">
      <Card/>
      <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
    </div>
  );
}

export default App;
