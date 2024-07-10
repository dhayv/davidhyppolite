import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, RouteObject} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
const routes: RouteObject[] = ([
  {
    path: "/",
    element: <Navbar/>

  }
])

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
