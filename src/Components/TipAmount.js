import React from "react";
import "./TipAmount.scss";
export default function TipAmount(props) {
  const clickHandler = () => {
    props.setPercentage(0);
    props.setBillPrice(0);
    props.setPerPerson(1);
  };

  return (
    <div className="tip-container">
      <div className="tip-amount-container">
        <div className="tip-amount">
          <div>
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div>
            <div className="price">
              <p>{props.percentageCalcTwo}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="total-container">
        <div className="total-per-person">
          <h3>Total</h3>
          <p>/ person</p>
        </div>
        <div className="price">
          <p>{props.pricePerPersonTwo}</p>
        </div>
      </div>
      <button onClick={clickHandler}>RESET</button>
    </div>
  );
}
