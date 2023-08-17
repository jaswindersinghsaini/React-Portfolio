import React from "react";
import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "#90909B",
  },
  headingStyle: {
    fontSize: "50px",
  },
};

export default function Header() {
  return (
    <header className="header" style={styles.headerStyle}>
      <h1 style={styles.headingStyle}>Jaswinder Singh</h1>
    </header>
  );
}
