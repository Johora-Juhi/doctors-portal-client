import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bg } = card;

    return (
        <div className={`card px-6 py-8 card-side shadow-xl ${bg}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;