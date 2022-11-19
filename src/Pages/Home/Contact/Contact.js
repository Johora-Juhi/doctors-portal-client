import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className="hero py-16" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className='text-lg font-bold text-primary'>Contact Us</h3>
                    <h1 className='text-3xl text-white'>Stay connected with us</h1>
                    <div className="form-control mt-8">
                        <input type="text" placeholder="Email Address" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-5">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-5">
                        <textarea className="textarea" placeholder="Your Message"></textarea>
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-5">Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Contact;