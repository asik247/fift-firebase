import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;