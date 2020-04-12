import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Countries from "./container/Countries/Countries";
import Currentcases from "./container/Cases/Cases";

const app = () => {
  return (
    <div>
      <Navbar />
      <Currentcases />
      <Countries />
    </div>
  );
};

export default app;
