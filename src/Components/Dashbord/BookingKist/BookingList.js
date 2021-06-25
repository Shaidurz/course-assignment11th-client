import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const BookingList = ({ isAdmin }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orderList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(bookings)
            })
    }, [])
    return (
        <div style={{ marginTop: "30px" }}>
            <div className="container">
                <div className="book-list">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Course</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            {bookings.map(bookings => <tr>
                                <td>{bookings.name}</td>
                                <td>{bookings.email}</td>
                                <td>{bookings.bookingData.course}</td>
                                <td>{bookings.bookingData.price}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;