import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 col-12">
                            <div className="banner-content text-right">
                                <h2>Hey!</h2>
                                <h2>We are</h2>
                                <h1>Design Station</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                                <ul className="d-flex justify-content-end">
                                    <li>
                                        <a href="#">HIRE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;