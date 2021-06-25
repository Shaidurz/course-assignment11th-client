import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';
const stripePromise = loadStripe('pk_test_51IeYvsHwT5VpE18lFwKMJiSKKY0X6R1A4fjNXjzfFPn1iSDgAsca2cBK4IZdiNUy9NI7h0HOBPxBisu3AOXXgWGS00jP0njZ2q');

const PaymentCard = ({ handlePayment }) => {
    return (
        <div className="text-left">
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default PaymentCard;