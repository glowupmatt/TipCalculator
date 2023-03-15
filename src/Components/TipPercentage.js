import React from "react";
import "./TipPercentage.scss";

export default function TipPercentage(props) {
  function handleChange(e) {
    const customTip = e.target.value;
    props.setPercentage(customTip);
  }

  console.log(props.percentage);
  return (
    <div className="select-tip-container">
      <p>Select Tip %</p>
      <div className="tip-percentage">
        <div className="left-side">
          <button onClick={() => props.setPercentage(5)}>5%</button>
          <button onClick={() => props.setPercentage(10)}>10%</button>
          <button onClick={() => props.setPercentage(15)}>15%</button>
        </div>
        <div className="right-side">
          <button onClick={() => props.setPercentage(25)}>25%</button>
          <button onClick={() => props.setPercentage(50)}>50%</button>
          <label id="custom-tip" />
          <form onSubmit={() => props.setPercentage()}>
            <input onChange={handleChange} type="number" placeholder="Custom" />
          </form>
        </div>
      </div>
    </div>
  );
}
