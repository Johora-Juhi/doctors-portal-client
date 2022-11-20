import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookinModal from '../BookingModal/BookinModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatement, setTreatement] = useState(null);
    const date = format(selectedDate, 'PP')

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <div className='my-24'>
            <p className='text-2xl text-primary text-center pb-6'>Avaiable Services on {format(selectedDate, 'PP')}</p>
            <p className='text-2xl text-gray-400 text-center pb-6'>Please select a service</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatement={setTreatement}></AppointmentOption>)
                }
            </div>
            {treatement &&
                <BookinModal
                    treatement={treatement}
                    selectedDate={selectedDate}
                    setTreatement={setTreatement}
                    refetch={refetch}
                ></BookinModal>}
        </div>
    );
};

export default AvailableAppointments;