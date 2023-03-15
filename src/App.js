import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import MainAssetComp from "./Components/MainAssetComp";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <div className="main-asset-container">
          <MainAssetComp />
        </div>
      </div>
    </div>
  );
}

export default App;
