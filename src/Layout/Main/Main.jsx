import React from 'react';
import Navigationbar from '../../Shared/NavigationBar.jsx/Navigationbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;