import React from 'react';
import about from '../../../images/s1 (1).png'
import './about.css'

const About = () => {
    return (
        <section className="about" style={{ marginTop: "100px" }}>
            <div className="container">
                <h2 className="text-center mb-5 heading-h2">Who We Are</h2>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="about-img">
                            <img className="img-fluid w-100" src={about}></img>
                        </div>
                    </div>
                    <div className="col-md-6 co-12">
                        <div className="about-details text-left">
                            <h2>Design Station Is a warehouse of specialized designer</h2>
                            <h6>And equal blame duty belongs to those who fail in their duty through weakne will.</h6>
                            <p>On the other hand, denounce with righteous indignation and dislike men who are beguiled and demor the charms pleasure the moment, so blinded dislike by desire, that they cannot foresee the pain and trouble that are bound to ens</p>
                            <p>And equal blame duty belongs to those who fail in their duty through weakne will.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;