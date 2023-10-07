import React from 'react';
import Header from './Header/Header';
import RightSideNav from './RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2 className=' text-3xl'>News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;