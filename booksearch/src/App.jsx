import React from 'react'
import Navbar from './component/Navbar'
import { createBrowserRouter, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const myroutes = createBrowserRouter([
  {path: '/', Component: Home},
  {path: '/home', Component: Home},
  {path: '/about', Component:About},
])
const App = () => {
  
  return (
  <>

<RouterProvider router={myroutes}>

</RouterProvider>
  </>
  )
}

export default App