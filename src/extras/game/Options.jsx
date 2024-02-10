// Options.js
import React from 'react';
import "./game.css"

const Options = ({ options, onSelect }) => (
  <div className="options">
    {options.map((option) => (
      <button className='btn game' key={option} onClick={() => onSelect(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default Options;
