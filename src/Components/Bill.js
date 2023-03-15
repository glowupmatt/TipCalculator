import React from "react"
import "./Bill.scss"

export default function Bill(props) {
  const handleChange = (e) => {
    props.setBillPrice(e.target.value)
  }

  return (
    <div className="bill-container">
      <label>Bill</label>
      <input
        value={props.billPrice}
        onChange={handleChange}
        name="bill"
        id="bill"
        type="number"
        placeholder="Price of Bill"
      ></input>
    </div>
  )
}
