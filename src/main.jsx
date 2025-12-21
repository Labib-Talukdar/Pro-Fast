import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router/dom";
import { router} from './router/router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './contexts/AuthContext/AuthProvider';

 Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode> 
   <div className='font-Urbanist mx-w-7xl '>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   </div>
  </StrictMode>,
)
