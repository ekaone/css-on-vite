import React from "react";
import { Router, Link } from "@reach/router";
import { Apps, Home, Attention, Shake } from "./components";

function App() {
  return (
    <>
      <Router>
        <Apps path="/">
          <Home path="/" />
          <Attention path="attention" />
          <Shake path="shake" />
        </Apps>
      </Router>
    </>
  );
}

export default App;
