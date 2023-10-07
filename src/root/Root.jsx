import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className=' max-w-5xl mx-auto font-poppins'>

            <Outlet></Outlet>
        </div>
    );
};

export default Root;