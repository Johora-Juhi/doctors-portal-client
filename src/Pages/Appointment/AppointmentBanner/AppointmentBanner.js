import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero py-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='mr-16'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
            {/* <p className='text-2xl text-primary text-center pb-6'>Avaiable Services on {format(selectedDate,'PP')}</p> */}
        </header>
    );
};

export default AppointmentBanner;