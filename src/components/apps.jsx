import React from "react";
import { Link } from "@reach/router";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "green" : "blue",
        },
      };
    }}
  />
);

function Apps({ children }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        CSS Animation
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
          letterSpacing: "3px",
        }}
      >
        <NavLink to="/">Home</NavLink> |
        <NavLink to="attention">Attention</NavLink> |
        <NavLink to="shake">Shake</NavLink>
      </nav>
      {children}
    </div>
  );
}

export default Apps;
