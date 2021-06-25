import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Admin from '../AdminDashboard/Admin/Admin';
import Client from '../ClientDashboard/Client/Client';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div>
            {isAdmin ? <div><Admin isAdmin={isAdmin}></Admin></div> :
                <div><Client isAdmin={isAdmin}></Client ></div>}
        </div>
    );
};

export default Dashboard;