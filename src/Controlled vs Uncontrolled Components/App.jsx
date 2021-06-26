import { useRef } from "react";

export const App = () => {
  const inputEl = useRef(null);

  const handleClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <h1>Controlled vs Uncontrolled Components</h1>

      <br />
      <h2>Controlled Component Example</h2>

      <form>
        <input type="text" placeholder="Enter Text" ref={inputEl}></input>
        <button type="button" onClick={handleClick}>
          Set Focus
        </button>
      </form>
    </div>
  );
};
