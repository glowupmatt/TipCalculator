import React from "react"
import "./TipPercentage.scss"

export default function TipPercentage(props) {
  function handleChange(e) {
    const customTip = e.target.value
    props.setPercentage(customTip)
  }

  const data = {
    left: [5, 10, 15],
    right: [25, 50],
  }

  return (
    <div className="select-tip-container">
      <p>Select Tip %</p>
      <div className="tip-percentage">
        <div className="left-side">
          {data.left.map((number) => {
            return (
              <button key={number} onClick={() => props.setPercentage(number)}>
                {number}%
              </button>
            )
          })}
        </div>
        <div className="right-side">
          {data.right.map((number) => {
            return (
              <button key={number} onClick={() => props.setPercentage(number)}>
                {number}%
              </button>
            )
          })}
          <label id="custom-tip" />
          <input onChange={handleChange} type="number" placeholder="Custom" />
        </div>
      </div>
    </div>
  )
}
