import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Countries from "./container/Countries/Countries";

const app = () => {
  return (
    <div>
      <Navbar />
      <Countries />
    </div>
  );
};

export default app;
