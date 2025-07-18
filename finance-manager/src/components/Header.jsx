import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>💰 Finance Manager</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2d2e32",
    color: "white",
    padding: "1rem 2rem",
    textAlign: "center",
  },
  logo: {
    margin: 0,
    fontSize: "1.8rem",
  },
};

export default Header;
