import React from "react";
import Banner from "./BannerFolder/Banner";
import Topbar from "./TopbarFolder/Topbar";
import "./App.css";

// import { CgBattery } from "react-icons/cg";
// import About from "./AboutFolder/About";

function App() {
  // bjhkbjkbilj
  // let isBatterySupported = "getBattery" in navigator;
  // if (!isBatterySupported) {
  //   console.log("Battery not supported");
  // }
  // let batteryPromise = navigator.getBattery();
  // batteryPromise.then(batteryCallback);
  // function batteryCallback(batteryObject) {
  //   printBatteryStatus(batteryObject);
  // }
  // function printBatteryStatus(batteryObject) {
  //   console.log("IsCharging", batteryObject.charging);
  //   console.log("Percentage", batteryObject.level);

  //   console.log("charging Time", batteryObject.chargingTime);
  //   console.log("DisCharging Time", batteryObject.dischargingTime);
  // }

  // function batteryCallback(batteryObject) {
  //   printBatteryStatus(batteryObject);
  //   batteryObject.addEventListener("chargingchange", function (ev) {
  //     printBatteryStatus(batteryObject);
  //   });
  //   batteryObject.addEventListener("levelchange", function (ev) {
  //     printBatteryStatus(batteryObject);
  //   });
  // }
  // navigator.getBattery().then(function (battery) {
  //   console.log(battery);
  // });
  // jhbj,b
  return (
    <div className="App">
      {/* <p>{`${navigator.userAgent}`}</p>
      <p>{`${navigator.appVersion}`}</p>
      <CgBattery /> */}
      <Topbar />
      <Banner />
    
    </div>
  );
}

export default App;
