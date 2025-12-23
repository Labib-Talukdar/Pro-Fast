import { StrictMode } from 'react'
import "leaflet/dist/leaflet.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router/dom";
import { router} from './router/router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './contexts/AuthContext/AuthProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

 Aos.init();
 const queryClient = new  QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode> 
   <div className='font-Urbanist mx-w-7xl '>

     <QueryClientProvider client={queryClient}>
      <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
   {/* <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider> */}
   </div>
  </StrictMode>,
)
