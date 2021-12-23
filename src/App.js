
import './App.css';
import { useState } from 'react';
import Box from './Box';

function App() {
  const [index, setIndex] = useState(1);
  function moveCard(i) { setIndex(i) }
  return (
    <div className="App">
      <Box card={index === 1} moveCard={moveCard.bind(null, 1)}></Box>
      <Box card={index === 2} moveCard={moveCard.bind(null, 2)}></Box>
      <Box card={index === 3} moveCard={moveCard.bind(null, 3)}></Box>
    </div>
  );
}

export default App;
