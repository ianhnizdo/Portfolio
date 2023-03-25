import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Projects from './components/Projects/Projects';
import Homepage from './components/HomePage/HomePage'



const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
  },
  {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />
  },

  {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />
  },
  {
      path: "/projects",
      element: <Projects />,
      errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
