import React from "react";

export default function Calibration({ setTestState }) {
  function handleButtonClick() {
    setTestState("Test1");
  }

  return (
    <>
      <div>Calibration</div>
      <button onClick={handleButtonClick}>Change State in Child</button>
    </>
  );
}
