import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookinModal from '../BookingModal/BookinModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatement, setTreatement] = useState(null);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
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
                ></BookinModal>}
        </div>
    );
};

export default AvailableAppointments;