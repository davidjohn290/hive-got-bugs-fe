import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import "./css/problemsList.css";
import "./css/problemCard.css";
import "./css/singleProblem.css";
import "./css/suggestions.css";
import "./css/suggestionCard.css";

import Home from "./components/Home";
import SingleProblem from "./components/SingleProblem";
import Header from "./components/Header";
import { StyledHexButton } from "./styled/lib";

function App() {
  return (
    <div className="app">
      <Router>
        <Home path="/" />
        <SingleProblem path="/problem" />
      </Router>
    </div>
  );
}

export default App;
