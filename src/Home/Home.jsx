import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const Home = () => {

    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className=' grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='border'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=' text-4xl col-span-2 '>
                    {
                        news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
                    }
                </div>
                <div ><RightSideNav></RightSideNav></div>


            </div>

        </div>
    );
};

export default Home;