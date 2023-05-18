import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Main from './Layout/Main/Main';
import ErrorPage from './Layout/ErrorPage/ErrorPage';
import Login from './Pages/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Registration from './Pages/Registration/Registraion';
import { ToastContainer } from 'react-toastify';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/registration",
        element: <Registration></Registration>,

      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
