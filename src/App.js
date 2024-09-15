import React from "react";// import the react and app style and BsState and pages import and -->
import "./App.css";
import BsState from "./Context/BsState";
import Home from "./Pages/Home";
//return it------------------------------------------------------------------------------------>
function App() {
  return (
    <>
      <BsState>
        <Home />
      </BsState>
    </>
  )
}

export default App;
