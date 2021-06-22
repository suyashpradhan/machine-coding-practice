import { useState } from "react";

/**
 *
 * Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.
 *
 */

export const App = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [calculation, setCalculation] = useState("");

  const handleCalculation = (e) => {
    if (e.target.innerHTML === "Add") {
      setCalculation(Number(inputOne) + Number(inputTwo));
    } else if (e.target.innerHTML === "Subtract") {
      setCalculation(inputOne - inputTwo);
    } else if (e.target.innerHTML === "Divide") {
      setCalculation(inputOne / inputTwo);
    } else {
      setCalculation(inputOne * inputTwo);
    }
  };

  return (
    <div>
      <form>
        <input
          placeholder="Number 1"
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne}
        ></input>
        <input
          placeholder="Number 2"
          onChange={(e) => setInputTwo(e.target.value)}
          value={inputTwo}
        ></input>
        <button type="button" onClick={(e) => handleCalculation(e)}>
          Add
        </button>
        <button type="button" onClick={(e) => handleCalculation(e)}>
          Subtract
        </button>
        <button type="button" onClick={(e) => handleCalculation(e)}>
          Divide
        </button>
        <button type="button" onClick={(e) => handleCalculation(e)}>
          Multiply
        </button>
      </form>
      <h1>Calculation : {calculation}</h1>
    </div>
  );
};
