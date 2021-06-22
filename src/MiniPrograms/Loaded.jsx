import { useState } from "react";

export const Loaded = () => {
  const [displayText, setDisplayText] = useState(false);

  const handleLoading = () => {
    displayText ? setDisplayText(false) : setDisplayText(true);
  };

  return (
    <div>
      <h1 style={displayText ? { display: "none" } : { display: "block" }}>
        Loading...
      </h1>
      <button onClick={handleLoading}>Loaded</button>
    </div>
  );
};
