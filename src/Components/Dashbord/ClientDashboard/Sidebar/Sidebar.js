import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = ({ _id }) => {
    return (
        <div className="sidebar">
            <ul>
                <Link to={`/booking/${_id}`}> <li>Book</li></Link>
                <Link to={'/bookingList'}> <li>BookingList</li></Link>
                <Link to='/review'><li>Review</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;