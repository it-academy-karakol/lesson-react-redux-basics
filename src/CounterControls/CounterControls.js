import React from "react";

export default props => (
  <div>
    <button onClick={_ => props.setCounter(-10)}>-10</button>
    <button onClick={_ => props.setCounter(-5)}>-5</button>
    <button onClick={_ => props.setCounter(-1)}>-1</button>
    <button onClick={_ => props.setCounter(1)}>+1</button>
    <button onClick={_ => props.setCounter(5)}>+5</button>
    <button onClick={_ => props.setCounter(10)}>+10</button>
  </div>
);
