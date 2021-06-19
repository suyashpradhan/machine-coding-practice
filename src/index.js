import React from "react";
import ReactDOM from "react-dom";
import { Axios } from "./API/Axios";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Axios />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
