import React from 'react';
import './rdetails.css'

const ReviewDetails = ({ review }) => {
    return (
        <div className="col-md-4 col-12">
            <div className="review-details">
                <img src={review.imgUrl}></img>
                <h3>{review.name}</h3>
                <small>{review.student}</small>
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;