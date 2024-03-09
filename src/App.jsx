import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
   const webgazer = window.webgazer
    webgazer.setGazeListener(function(data, elapsedTime) {
      if (data == null) {
        return;
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport
      console.log(elapsedTime); //elapsed time is based on time since begin was called
      console.log(data);
    }).begin();
    console.log()
  }, [])

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
