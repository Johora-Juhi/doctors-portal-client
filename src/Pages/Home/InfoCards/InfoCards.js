import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[
        {
            id:1,
            name:'Opening Hours',
            description:'Open 9:00 AM to 8:00 PM everyday',
            icon:clock,
            bg:'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name:'Visit Our Location',
            description:'Open 9:00 AM to 8:00 PM everyday',
            icon:marker,
            bg:'bg-accent'
        },
        {
            id:3,
            name:'Contact Us',
            description:'Open 9:00 AM to 8:00 PM everyday',
            icon:phone,
            bg:'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 text-white'>
            {
                cardData.map(card=><InfoCard
                key={card.id}
                card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;