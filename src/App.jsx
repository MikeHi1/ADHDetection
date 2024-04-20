import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0)
  
  // useEffect(() => {
  //  const webgazer = window.webgazer
  //   webgazer.setGazeListener(function(data, elapsedTime) {
  //     if (data == null) {
  //       return;
  //     }
  //     var xprediction = data.x; //these x coordinates are relative to the viewport
  //     var yprediction = data.y; //these y coordinates are relative to the viewport
  //     console.log(elapsedTime); //elapsed time is based on time since begin was called
  //     console.log(data);
  //   }).begin();
  //   console.log()
  // }, [])

  return (
    <div className=''> 
    <Helmet>
        <title>ADHDetection</title>
        <meta
          name="description"
          content="Free ADHD Detection test"
        />
        <meta
          name="keywords"
          content="ADHD, Test, Detection"
        />
      </Helmet>

    {/* margins xaxis adjustment */}
    <Navbar/>
    <div className = 'container mx-auto'> <Outlet/></div>
    {/* dsplays different pages */}
    <Footer/>
    </div>
  )
}

export default App
