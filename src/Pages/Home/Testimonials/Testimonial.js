import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { review, img, name, location } = testimonial;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center mt-5">
                    <div className="avatar">
                        <div className="w-16 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt=''/>
                        </div>
                    </div>
                    <div>
                            <h2 className='text-xl'>{name}</h2>
                            <p>{location}</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;