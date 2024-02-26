import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [sidebarItems, setSidebarItems] = useState([
    "Sidebar Item 1",
    "Sidebar Item 2",
    "Sidebar Item 3",
  ]);
  const [mainItems, setMainItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItem = e.dataTransfer.getData("text/plain");
    setMainItems([...mainItems, droppedItem]);
  };

  return (
    <div className="App">
      <h1>Drag and Drop Example</h1>
      <div className="sidebar">
        <h2>Sidebar</h2>
        <div className="sidebar-items">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="item"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div
        className="main"
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
      >
        <h2>Main Section</h2>
        <div
          className="main-items"
          style={{ background: "red", height: "500px", width: "700px" }}
        >
          {mainItems.map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
