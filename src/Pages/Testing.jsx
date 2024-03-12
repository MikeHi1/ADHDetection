import React, { useState } from 'react'
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
  

  return (
    <>
      {testState === testStates.CALIBRATION && <Calibration setTestState={setTestState} />}
      {testState === testStates.Test1 && <Test1 />}
      {testState === testStates.Test2 && <Test2 />}
      { testState === testStates.Test3 && <Test3 />} 
    </>
  )
}
