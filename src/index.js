import React from "react";
import ReactDOM from "react-dom";
import { DarkMode } from "./DarkMode/DarkMode";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./DarkMode/context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <DarkMode />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
