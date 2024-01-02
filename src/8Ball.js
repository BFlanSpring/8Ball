import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const initialColor = 'black';
  const initialMessage = 'Think of a Question';
  
  const [color, setColor] = useState(initialColor);
  const [message, setMessage] = useState(initialMessage);
  const [greenCount, setGreenCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [goldenrodCount, setGoldenrodCount] = useState(0);

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setColor(color);
    setMessage(msg);
    
    // Update color count
    updateColorCount(color);
  };

  const updateColorCount = (color) => {
    switch (color) {
      case 'green':
        setGreenCount(greenCount + 1);
        break;
      case 'red':
        setRedCount(redCount + 1);
        break;
      case 'goldenrod':
        setGoldenrodCount(goldenrodCount + 1);
        break;
      default:
        break;
    }
  };

  const resetEightBall = () => {
    setColor(initialColor);
    setMessage(initialMessage);
  };

  return (
    <div className="eight-ball">
      <p className="message" style={{ backgroundColor: color }}>{message}</p>
      <button onClick={getRandomAnswer}>Shake</button>
      <button onClick={resetEightBall}>Reset</button>
      <div className="counter"> 
        <p>Green Count: {greenCount}</p>
        <p>Red Count: {redCount}</p>
        <p>Goldenrod Count: {goldenrodCount}</p>
      </div>
    </div>
  );
};

export default EightBall;
