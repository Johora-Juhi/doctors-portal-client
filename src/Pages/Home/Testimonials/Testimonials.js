import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            name: 'Winson Herry',
            location: 'California'
        },
        {
            _id: 3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            name: 'Winson Herry',
            location: 'California'
        }
    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-lg text-primary font-bold'>Testimonials</h5>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <img className='w-20 lg:w-48' src={quote} alt="" />
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16'>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial._id}
                        testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;