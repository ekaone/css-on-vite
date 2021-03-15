import React from "react";
import "./Box.css";

function Box({ children, cn }) {
  return <div className={`Box ${cn}`}>{children}</div>;
}

export default Box;
