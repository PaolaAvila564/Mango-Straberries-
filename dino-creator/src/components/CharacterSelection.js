// src/components/CharacterSelection.js
import React from 'react';
import './CharacterSelection.css';

const CharacterSelection = ({ setSelectedDino }) => {
  return (
    <div className="character-selection">
      <h2>Select a Dino:</h2>
      <button onClick={() => setSelectedDino('TRex')}>T-Rex</button>
      <button onClick={() => setSelectedDino('Stegosaurus')}>Stegosaurus</button> {/* Optional */}
    </div>
  );
};

export default CharacterSelection;
