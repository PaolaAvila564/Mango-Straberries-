// src/components/TRex.js
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';  // Import the SketchPicker from react-color
import './TRex.css';  // Make sure the path is correct

const TRex = () => {
  // Set up state to store the selected color
  const [color, setColor] = useState('#00a652');  // Default color

  return (
    <div className="trex-container">
      <h1>Change the T-Rex Color</h1>

      {/* Color Picker */}
      <SketchPicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}  // Update state with new color
      />

      {/* T-Rex component that changes color dynamically */}
      <div className="dino" style={{ '--dino-color': color }}>
        <div className="dino__head">
          <div className="dino__head__back"></div>
          <div className="dino__head__topfront"></div>
          <div className="dino__head__mouth"></div>
          <div className="dino__head__throat"></div>
          <div className="dino__head__eye"></div>
        </div>
        <div className="dino__body">
          <div className="dino__body__mid"></div>
          <div className="dino__arm"></div>
        </div>
        <div className="dino__back-leg"></div>
        <div className="dino__tail"></div>
        <div className="dino__bottom"></div>
        <div className="dino__bottom__shadow"></div>
        <div className="dino__front-leg"></div>
      </div>
    </div>
  );
};

export default TRex;
