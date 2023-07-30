import React from "react";
import Box from "./box";
import CreateProgram from "./createProgram";
import Header from "./header";
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
