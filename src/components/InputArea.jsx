import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
      }

      function handleSubmit(event) {
        event.preventDefault();
        props.onAdd(event, inputText);
        setInputText("");
      }

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={inputText} required />
      <button>
        <span>Add</span>
      </button>
      </form>
    </div>
  );
}

export default InputArea;
