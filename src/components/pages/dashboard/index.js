import React from "react";
import CreateProgram from "./createProgram";
import Header from "./header";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <CreateProgram />
    </div>
  );
};

export default Dashboard;
