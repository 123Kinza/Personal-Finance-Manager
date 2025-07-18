import React from "react";

const Dashboard = () => {
  return (
    <main style={styles.container}>
      <section style={styles.card}>
        <h2>Total Balance</h2>
        <p>PKR 120,000</p>
      </section>
      <section style={styles.card}>
        <h2>Monthly Budget</h2>
        <p>PKR 25,000</p>
      </section>
    </main>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "1rem",
    padding: "2rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: "1rem 2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    minWidth: "200px",
    textAlign: "center",
  },
};

export default Dashboard;
