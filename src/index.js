import React from "react";
import ReactDOM from "react-dom";
import { TernaryOperator } from "./Misc/TernaryOperator";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TernaryOperator />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
