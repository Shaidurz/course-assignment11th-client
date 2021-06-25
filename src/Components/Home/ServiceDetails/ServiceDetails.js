import React from 'react';
import { Link } from 'react-router-dom';
import './serviceDetails.css'

const ServiceDetails = (props) => {
    const { name, price, duration, support, _id, classes, imgUrl } = props.service
    return (
        <div className="col-md-4 col-12">
            <div className="serviceDetails shadow p-3 mb-5 bg-body rounded">
                <img src={imgUrl}></img>
                <h6>{name}</h6>
                <h2>${price}</h2>
                <p>Duration {duration} Month</p>
                <p>{classes} class</p>
                <p>{support} Support</p>
                <Link to={`/booking/${_id}`}><button className="btn btn-primary button">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;