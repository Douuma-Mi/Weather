import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Slide from "./Slide";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <Slide/>
      <Weather/>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
