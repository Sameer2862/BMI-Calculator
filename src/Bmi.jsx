import "./App.css";
import { useState, useMemo } from "react";

export default function Bmi() {
  const [height, setHeight] = useState(50);
  const [weight, setWeight] = useState(30);

  function onHeightChange(e) {
    const inputHight = e.target.value;
    setHeight(inputHight);
  }

  function onWeightChange(e) {
    const inputWeight = e.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calHeight = height / 100;
    return (weight / (calHeight * calHeight)).toFixed(2);
  }, [height, weight]);

  return (
    <div className="main">
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <div className="form">
          <p>Weight : {weight}</p>
          <input type="range" min={30} max={150} onChange={onWeightChange} />

          <p>Height : {height}</p>
          <input type="range" max={200} min={100} onChange={onHeightChange} />
        </div>
        <div className="result">
          <p>
            Your BMI is : <label className="value">{output}</label>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
