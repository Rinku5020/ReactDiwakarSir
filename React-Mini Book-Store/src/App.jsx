import React from "react";
import './App.css';
import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {

  const[value,setValue]=useState(false)
  return (
    <div className="main-div">
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" className="btn" onClick={()=>setValue(!value)}>{value ? "Show Fictional Books":"Show Non-Fictional Books" }</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
       {value ? <NonFiction/>: <Fiction/>} 
        
        
      </div>
    </div>
  );
}

export default App;
