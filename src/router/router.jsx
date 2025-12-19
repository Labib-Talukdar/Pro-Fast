import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/login/Login";
import AuthLayout from "../layouts/AuthLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
        {index: true, Component:  Home}
    ]
  },
   {
    path: '/',
    Component: AuthLayout,
    children: [
      {path: 'login', 
        Component: Login
      }
    ]

   }
]);