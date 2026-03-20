import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-between items-center mt-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;