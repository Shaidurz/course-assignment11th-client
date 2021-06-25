import React, { useState, useEffect, useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './booking.css'
import PaymentCard from '../PaymentCard/PaymentCard';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderProduct, setOrderProduct] = useState([])
    const { _id } = useParams()

    useEffect(() => {
        fetch('https://stark-crag-95097.herokuapp.com/orderService/' + _id)
            .then(res => res.json())
            .then(data => {
                setOrderProduct(data)
                console.log(orderProduct)

            })
    }, [])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [bookingData, setBookingData] = useState(null)
    const onSubmit = (data) => {
        setBookingData(data)
    }
    const handlePayment = paymentID => {
        const bookingInfo = {
            ...loggedInUser,
            bookingData: bookingData,
            Date: new Date().toDateString(),
            image: orderProduct.imgUrl,
            paymentID: paymentID
        }
        console.log(bookingData)
        fetch('https://stark-crag-95097.herokuapp.com/serviceBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingInfo)
        })
    }

    return (
        <div className="bookings" >
            <div className="row">
                <div className="col-md-2" ><Sidebar _id={_id}></Sidebar></div>
                <div className="col-md-4" style={{ display: bookingData ? 'none' : 'block' }}>
                    <div className="booking-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input {...register("course", { required: true })} className="form-control" value={orderProduct.name} name="course" />
                                {errors.course && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input {...register("price", { required: true })} className="form-control" name="price" value={orderProduct.price} />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            <div className="form-group row">
                                <div className="col-6">
                                    <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                        <option disabled={true} value="Not set">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Not set">Other</option>
                                    </select>
                                    {errors.gender && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col-6">
                                    <input {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                    {errors.age && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>this is payment</h3>
                    <PaymentCard handlePayment={handlePayment}></PaymentCard>
                </div>
            </div>
        </div>
    );
};

export default Booking;