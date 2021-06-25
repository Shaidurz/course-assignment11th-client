import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Services/Service';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Review></Review>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default Home;