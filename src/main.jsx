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
import 'react-toastify/dist/ReactToastify.css';
import Home from './Layout/Main/Home';
import Blog from './Components/Blogs/Blogs';
import AddToys from './Components/ToysCollection/AddToys/AddToys';
import AllToys from './Components/ToysCollection/AllToys/AllToys';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/registration",
        element: <Registration></Registration>,

      },
      {
        path: "/blogs",
        element: <Blog></Blog>

      },
      {
        path: "/addtoy",
        element: <AddToys></AddToys>,

      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>

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
