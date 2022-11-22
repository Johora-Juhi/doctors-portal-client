import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const MakePayment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { appointmentDate, slot, treatement, price } = booking;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='bg-blue-50 p-8'>
            <h1 className='text-xl font-bold'>Payment for {treatement}</h1>
            <p className='py-2'>Please pay <strong>$ {price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking} />
            </Elements>
        </div>
    );
};

export default MakePayment;