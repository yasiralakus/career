import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Jobs from './Pages/Jobs.jsx'
import Companies from './Pages/Companies.jsx'
import About from './Pages/About.jsx'
import JobDetails from './Pages/JobDetails.jsx'
import CompanyDetails from './Pages/CompanyDetails.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'/jobs',
                element: <Jobs />
            },
            {
                path:'/companies',
                element: <Companies />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/job-details',
                element: <JobDetails />
            },
            {
                path: '/company-details',
                element: <CompanyDetails />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
