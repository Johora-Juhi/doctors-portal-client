import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatement }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="hero shadow-xl rounded-xl py-6">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-2xl text-primary">{name}</h1>
                    <p className="py-2">{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                    <p className="pb-2">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} avaiable</p>
                    {/* <button className="btn btn-primary  text-white bg-gradient-to-r from-primary to-secondary">Book Appointment</button> */}
                    <label disabled={slots.length === 0} onClick={() => setTreatement(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary  text-white bg-gradient-to-r from-primary to-secondary">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;