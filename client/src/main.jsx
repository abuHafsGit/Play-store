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
      }
    ],
    errorElement: <Not_Found />
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <App />
  </RouterProvider>,
)
