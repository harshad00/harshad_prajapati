import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './pages/Hero.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Not from './pages/Not.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Hero/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/error',
        element: <Not/>
      },
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
