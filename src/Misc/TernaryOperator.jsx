import React from "react";

const arr = [];

export const TernaryOperator = () => {
  return (
    <div>
      <h1>&& vs Ternary Operator</h1>
      <br />
      <h2>Using &&</h2>
      {arr.length && arr.map((item) => <p>{item}</p>)}

      <br />
      <br />
      <h2>Using Ternary Operator</h2>
      {arr.length ? (
        arr.length && arr.map((item) => <p>{item}</p>)
      ) : (
        <h4>No Data</h4>
      )}
    </div>
  );
};
