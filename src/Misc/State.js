import { useState } from "react";

export const State = () => {
  const [counter, setCounter] = useState(0);

  //Every Run
  console.log("Inside Function");

  //Only On Click
  const handleCounter = () => {
    console.log("State value gonna change", counter);
    setCounter(counter + 1);
    console.log("State Value Here", counter);
  };

  //Every Run takes and returns new state value
  console.log("Before Return", counter);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>How useState Works?</h1>

      <h2>Counter Value: {counter}</h2>
      <button onClick={handleCounter}>Increment Counter Value</button>
    </div>
  );
};
