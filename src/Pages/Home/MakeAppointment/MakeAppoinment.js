import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';


const MakeAppoinment = () => {
    return (
        <div className="hero my-28" style={{ backgroundImage: `url(${appointment})`}}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className=" -mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h5 className='text-lg text-primary font-bold pb-3'>Appointment</h5>
                    <h1 className=" text-white text-5xl font-bold">Make an appointment Today</h1>
                    <p className=" text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white  bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;