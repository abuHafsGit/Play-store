import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout.jsx'
import HomePage from './pages/homepage/HomePage.jsx'
import Apps from './pages/apps/Apps.jsx'
import InstallApps from './pages/installationapps/InstallApps.jsx'
import Not_Found from './components/Not_Found/Not_Found.jsx'
import AppDetails from './components/appDetails/AppDetails.jsx'

import AppcontextProvider from './AppContext/AppContext'
import Dashborad from './pages/Dashboard/Dashborad.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/apps',
        element: <Apps />
      },
      {
        path: "/installapp",
        element: <InstallApps />
      },
      {
        path: '/apps/:id',
        element: <AppDetails />
      },
      {
        path: 'dashboard',
        element: <Dashborad />
      }
    ],
    errorElement: <Not_Found />
  }
])
createRoot(document.getElementById('root')).render(
  <AppcontextProvider>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>,
  </AppcontextProvider>
)
