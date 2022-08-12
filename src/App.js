import React from "react";
import ReactDOM from "react-dom/client";
import Style from "../src/App.css"
import Banner from "./BannerFolder/Banner";
import Topbar from "./TopbarFolder/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Banner />
    </div>
  );
}

export default App;
