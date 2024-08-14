import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './Pages/HomePage.jsx'
import Layout from './Layout/Layout.jsx'
import BootCampsPage from './Pages/BootCampsPage.jsx'
import AboutUs from './Pages/AboutUsPage.jsx'
import ContactUs from './Pages/ContactUsPage.jsx'
import AboutUsPage from './Pages/AboutUsPage.jsx'
import ContactUsPage from './Pages/ContactUsPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import BootCampDetailsPage from './Pages/BootCampDetailsPage.jsx'

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path :"/",
    element :<Layout/>,
    children :[
      {
        index : true ,
        element : <HomePage/>
      },
      {
        path:"/bootcamps",
        element : <BootCampsPage/>
      },
      {
        path : "/bootcamps/:bootcampId",
        element : <BootCampDetailsPage/>
      },
      {
        path :"/aboutus",
        element : <AboutUsPage/>
      },
      {
        path :"/contactus",
        element :<ContactUsPage/>
      }
    ]
  },
  {
    path:"/login",
    element:<LoginPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider> 
  </StrictMode>,
)
