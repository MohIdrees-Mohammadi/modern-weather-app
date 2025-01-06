import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WelcomePage from '../Pages/Welcome/WelcomePage'
import Home from '../Pages/Home/Home'



const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/home',
    element: <Home />,
  }
])



const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
