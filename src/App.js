import React from "react";

import CarousalWrap from "./CarousalWrap";
import "./App.css";

function App() {
  const slideArr = ["first", "sec", "third"];
  return (
    <div className="App">
      <CarousalWrap slides={slideArr}></CarousalWrap>
    </div>
  );
}

export default App;
