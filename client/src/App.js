import React, {useState, Component} from "react";

import SimpleStorageContract from "./contracts/Simpl";
import getweb3 from "./getWeb3";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";


const App = () => {
  return (
    <div className="app">
     <Navbar/>
     <Routing/>
    </div>
  );
};

export default App;
