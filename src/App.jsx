import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLocation} from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Helmet } from "react-helmet";


function App() {
  let location = useLocation();

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    console.log(location.pathname)
    
  }, [location])

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

    { location.pathname !== "/testing" && 
      <Navbar/>
    }
    
    
    <div className = 'container mx-auto pt-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"'> 
      <Outlet/>
    </div>
    {/* dsplays different pages */}
    <Footer/>
    </div>
  )
}

export default App
