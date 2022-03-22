import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  
  const [items, setItems] = useState([]);

  

  // function addItem(inputText) {
  //   setItems((prevItems) => {
  //     return [...prevItems, inputText];
  //   });
  // }

  // Adding a new item to the list if the input is not empty
  function addItem(event, inputText) {
    event.preventDefault();
    if (inputText !== "") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
    }
  }

  // Deleting an item from the list
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
            key={index}
            id={index} 
            text={item}
            onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
