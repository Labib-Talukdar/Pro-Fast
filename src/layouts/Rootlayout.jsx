import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/share/Nabvar/Navbar';
import Footer from '../pages/share/Nabvar/footer/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;