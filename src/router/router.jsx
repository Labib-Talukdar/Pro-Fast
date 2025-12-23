import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/login/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Authentication/register/Register";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRouter from "/src/PrivateRoute.jsx"
import DashboardLayout from "../layouts/DashboardLayout";
import Myparcels from "../pages/Dashboard/MyParcels/Myparcels";


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
      },
      {
        path: '/sendParcel',
        element: <PrivateRouter><SendParcel></SendParcel></PrivateRouter>
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

   },
   {
    path: 'dashboard', 
    element: <PrivateRouter>
      <DashboardLayout></DashboardLayout>
    </PrivateRouter>,
    children: [
      {
        path: 'myParcel',
        Component:  Myparcels
      }
    ]
    
   }
]);