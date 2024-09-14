// src/App.js
import React, { useState } from 'react';
import TRex from './components/TRex';
import Stegosaurus from './components/Stegosaurus'; // Optional - if you create more dino components
import CharacterSelection from './components/CharacterSelection';

const App = () => {
  const [selectedDino, setSelectedDino] = useState('TRex'); // Default to T-Rex

  return (
    <div>
      <h1>Dino Color Picker App</h1>
      <CharacterSelection setSelectedDino={setSelectedDino} />

      {/* Conditionally render the dino component based on selection */}
      {selectedDino === 'TRex' && <TRex />}
      {selectedDino === 'Stegosaurus' && <Stegosaurus />}
    </div>
  );
};

export default App;
