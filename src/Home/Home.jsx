import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=' text-4xl col-span-2'>News coming soon</div>
                <div><RightSideNav></RightSideNav></div>


            </div>

        </div>
    );
};

export default Home;