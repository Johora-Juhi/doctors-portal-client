import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyAppointments = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    return (
        <div className='bg-blue-50 p-8'>
            <div>
                <h1 className='text-3xl'>My Appointments </h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>{booking.patientName}</td>
                                    <td>{booking.treatement}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`} className="btn btn-xs btn-accent"><button>Pay</button></Link>
                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <p className='text-green-600'>Paid</p>
                                        }
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;