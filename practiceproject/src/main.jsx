import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>    
  </React.StrictMode>,
)
