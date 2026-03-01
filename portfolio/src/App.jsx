import { Fragment, useState } from "react";
import Header from "./assets/header";
import Headshot from "./assets/headshot";
import React from "react";
import Snowfall from "react-snowfall";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Snowfall
        color="white"
        snowflakeCount={200}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <Header />
      </div>
      <div className="relative z-10 flex justify-center items-center pt-25">
        <Headshot />
      </div>
    </div>
  );
}

export default App;
