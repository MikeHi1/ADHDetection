import React, { useEffect, useState } from "react";
import Help from "../../assets/calibration.png";

export default function Calibration({ setTestState }) {
  function handleButtonClick() {
    setTestState("Test2");
  }

  return (
    <div className="container mx-auto px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen flex flex-col place-content-center">
      <div>Calibration</div>

      <nav className="w-full h-16 bg-white">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
          <p className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            Not yet calibrated
          </p>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            Recalibrate
          </button>

          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            Toggle Filter
          </button>

          <button
            // onClick={showModal}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            Help
          </button>
        </div>
      </nav>

      <div className="calibrationDiv">
        <input type="button" className="Calibration" id="Pt1" />
        <input type="button" className="Calibration" id="Pt2" />
        <input type="button" className="Calibration" id="Pt3" />
        <input type="button" className="Calibration" id="Pt4" />
        <input type="button" className="Calibration" id="Pt5" />
        <input type="button" className="Calibration" id="Pt6" />
        <input type="button" className="Calibration" id="Pt7" />
        <input type="button" className="Calibration" id="Pt8" />
        <input type="button" className="Calibration" id="Pt9" />
      </div>

      <button onClick={handleButtonClick}>Change State in Child</button>
    </div>
  );
}
