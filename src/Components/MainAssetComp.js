import React, { useState } from "react"
import Bill from "./Bill"
import TipPercentage from "./TipPercentage"
import NumberPeople from "./NumberPeople"
import TipAmount from "./TipAmount"
import "./MainAssetComp.scss"

export default function MainAssetComp() {
  const [percentage, setPercentage] = useState(0)
  const [billPrice, setBillPrice] = useState(0)
  const [perPerson, setPerPerson] = useState(1)

  const percentageCalc = (billPrice * percentage) / 100 / perPerson
  const percentageCalcTwo = percentageCalc.toFixed(2)

  const pricePerPerson = billPrice / perPerson + percentageCalc
  const pricePerPersonTwo = pricePerPerson.toFixed(2)

  return (
    <div className="main-asset">
      <div className="top-three">
        <Bill billPrice={billPrice} setBillPrice={setBillPrice} />
        <TipPercentage percentage={percentage} setPercentage={setPercentage} />
        <NumberPeople perPerson={perPerson} setPerPerson={setPerPerson} />
      </div>
      <TipAmount
        setPercentage={setPercentage}
        setBillPrice={setBillPrice}
        setPerPerson={setPerPerson}
        pricePerPersonTwo={pricePerPersonTwo}
        percentageCalcTwo={percentageCalcTwo}
      />
    </div>
  )
}
