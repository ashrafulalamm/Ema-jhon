import React from 'react';
import   './Home.css'
import homeImg from '../../assets/Images/Group 12.svg'
import Navbar from '../Shared/Navbar/Navbar';
const Home = () => {
    return (
        <> 
        <Navbar></Navbar>
        <div className='home'>
            <div className="home-left">
            <h5>Sale up to 70% off</h5>
            <h1>New Collection For Fall</h1>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>

                <button>SHOP NOW</button>
            </div>

            <div className="home-right">
                <img src={homeImg} alt="" />

            </div> 
        </div>
        </>
    );
};

export default Home;