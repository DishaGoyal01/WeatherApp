import React, { useState } from "react";
import CurrentLocation from "./current";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        
        Developed by : {" "}
         <u>Disha Goyal</u> 
    
      </div>
    </React.Fragment>
  );
}

export default App;