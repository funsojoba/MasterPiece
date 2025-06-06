import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import Home from './pages/Home/index.jsx'
import Schedule from './pages/Schedule/index.jsx'
import Story from './pages/Story/index.jsx'
import Gift from './pages/GIFT/index.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  {
    path: "/story",
    element: <Story />,
  },
  {
    path: "/gift",
    element: <Gift />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
