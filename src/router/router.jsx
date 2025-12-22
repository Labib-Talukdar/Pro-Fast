import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/login/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Authentication/register/Register";
import Coverage from "../pages/Coverage/Coverage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
        {index: true, 
        Component:  Home
      },
      {
        path: 'coverage',
        Component: Coverage
      }
    ]
  },
   {
    path: '/',
    Component: AuthLayout,
    children: [
      {path: 'login', 
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]

   }
]);