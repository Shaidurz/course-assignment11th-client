import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul>
                <Link to='/addservice'><li>Add service</li></Link>
                <Link to="/addAdmin"><li>Add Admin</li></Link>
                <Link to="bookingList"><li>Order List</li></Link>
                <Link to='/manageService'> <li>Manage Service</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;