import React, { useState, useEffect } from 'react'
import Calibration from '../Components/Testing/Calibration'
import Test1 from '../Components/Testing/Test1';
import Test2 from '../Components/Testing/Test2';
import Test3 from '../Components/Testing/Test3';

export default function Testing() {
  const testStates = {
    CALIBRATION: 'Calibration',
    Test1: "Test1",
    Test2: "Test2",
    Test3: "Test3"
  }
  const [testState, setTestState] = useState(testStates.CALIBRATION)
  
    useEffect(() => {
   const webgazer = window.webgazer

      webgazer.setRegression('ridge')
        .setGazeListener(function (data, elapsedTime) { })
        .saveDataAcrossSessions(true)
        .begin();
      webgazer.showVideoPreview(true)
        .showPredictionPoints(true)
        .applyKalmanFilter(true);
      

  })

  return (
    <>
      {testState === testStates.CALIBRATION && <Calibration setTestState={setTestState} />}
      {testState === testStates.Test1 && <Test1 />}
      {testState === testStates.Test2 && <Test2 />}
      { testState === testStates.Test3 && <Test3 />} 
    </>
  )
}
