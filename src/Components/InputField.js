import React from "react";
import "./Styles/inputField.css";

const InputField = ({ searchTerm, onInput, onSearch }) => {
  return (
    <div className="container">
      <input
        type="text"
        value={searchTerm}
        onChange={onInput}
        className="input-field"
        placeholder="Enter a word..."
      />
      <button className="centered-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default InputField;
