import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './Pages/Home'
import Testing from './Pages/Testing'
import Community from './Pages/Community'
import About from './Pages/About'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/testing",
        element: <Testing/>
      },
      {
        path: "/community",
        element: <Community/>
      },
      {
        path: "/about",
        element: <About/>
      },
    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
