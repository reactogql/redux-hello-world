import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function App({ children }) {
  return (
    <div className="App">
      <h1>My App</h1>
      <NavLink to="/todos">Go Todo</NavLink>
      {children}
    </div>
  );
}

export default App;
