import React from "react";
import ReactDOM from "react-dom";
import { App } from "./FastMart/App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./FastMart/context/state-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider>
        <App />
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
