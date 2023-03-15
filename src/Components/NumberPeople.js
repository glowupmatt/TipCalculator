import React from "react";
import "./NumberPeople.scss";

export default function NumberPeople(props) {
  const handelChange = (e) => {
    props.setPerPerson(e.target.value);
  };
  console.log(props.perPerson);

  return (
    <div className="numb-people">
      <label>Number of People</label>
      <form onSubmit={() => props.setPerPerson()}>
        <input
          value={props.perPerson}
          onChange={handelChange}
          name="quantity"
          id="numberpeople"
          type="number"
          placeholder="Number of People"
        />
      </form>
    </div>
  );
}
