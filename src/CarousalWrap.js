import React, { useState } from "react";

//carousal button component
function CarousalButton(props) {
  return <button onClick={props.onClick}>{props.pos}</button>;
}

//carousal item component
function CarousalItem(props) {
  return <div className={props.displayClass}>{props.slide}</div>;
}

//Carousal wrapper component
function CarousalWrap(props) {
  const len = props.slides.length;
  const classArr = [
    "Carousal-Item_active",
    ...Array(len - 1).fill("Carousal-Item", 0, len - 1),
  ];
  const [classSent, setClass] = useState(classArr);

  function onNextClick() {
    setClass([classSent.pop(), ...classSent]);
  }
  function onPrevClick() {
    let classF = classSent.shift();
    setClass([...classSent, classF]);
  }
  const carousalItems = props.slides.map((slide, index) => (
    <CarousalItem
      key={index}
      slide={slide}
      displayClass={classSent[index]}
    ></CarousalItem>
  ));
  return (
    <div className="Carousal-Wrap">
      <CarousalButton onClick={onPrevClick} pos="Prev" />
      {carousalItems}
      <CarousalButton onClick={onNextClick} pos="Next" />
    </div>
  );
}

export default CarousalWrap;
