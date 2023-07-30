import React from "react";
import Box from "./box/Box";
import CreateProgram from "./createProgram/CreateProgram";
import Header from "./header/Header";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <CreateProgram />
      <Box />
    </div>
  );
};

export default Dashboard;
