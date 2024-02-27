import React from 'react';
import"../styles/style.css"

const RadioButton = () => {
  return (
    <div>
      <h2>Boutons radio</h2>
      <label className="radio-container">Option 1
        <input type="radio" name="radio" />
        <span className="radio-checkmark"></span>
      </label>

      <label className="radio-container">Option 2
        <input type="radio" name="radio" />
        <span className="radio-checkmark"></span>
      </label>

      <h2>Cases à cocher</h2>

      <label className="checkbox-container">Case 1
        <input type="checkbox" />
        <span className="checkbox-checkmark"></span>
      </label>

      <label className="checkbox-container">Case 2
        <input type="checkbox" />
        <span className="checkbox-checkmark"></span>
      </label>

      <button className="submit-button" type="submit">
      Submit
    </button>
    </div>
  );
};

export default RadioButton;
