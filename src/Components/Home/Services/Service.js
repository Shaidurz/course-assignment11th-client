import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './service.css'



const Service = () => {
    const [serviceInfo, setServiceInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getService')
            .then(res => res.json())
            .then(data => setServiceInfo(data))
    }, [])
    return (
        <section className="service d-flex align-items-center" style={{ marginTop: "100px" }}>
            <div className="container mt-5">
                <h1 className="heading-h2">What we're offering</h1>
                <div className="row mt-5">
                    {serviceInfo.map(service => <ServiceDetails service={service}></ServiceDetails>)}
                </div>
            </div>
        </section>
    );
};

export default Service;