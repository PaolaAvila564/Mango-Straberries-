// src/components/Stegosaurus.js
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './Stegosaurus.css';

const Stegosaurus = () => {
  const [color, setColor] = useState('#c47f00'); // Default color for Stegosaurus

  return (
    <div className="stegosaurus-container">
      <h1>Change the Stegosaurus Color</h1>
      <SketchPicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />

      {/* Stegosaurus component */}
      <div className="stego" style={{ '--stego-color': color }}>
        {/* Stegosaurus shape goes here */}
      </div>
    </div>
  );
};

export default Stegosaurus;
