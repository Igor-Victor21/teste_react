import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import './index.css'
import App from './App.jsx'


import Contact from './Contact.jsx'

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Calcs from './calcs.jsx';
import Media from './Media.jsx';
import Imc from './Imc.module.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/calcs",
    element: <Calcs/>,
  },
  {
    path: "/media",
    element: <Media/>,
  },
  {
    path: "/imc",
    element: <Imc/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <RouterProvider router={router} />
  </StrictMode>,
)
