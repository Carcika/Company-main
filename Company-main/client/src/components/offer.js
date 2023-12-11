import React from 'react';
import './offer.css';

const data = [
    {
        id: 1,
        name: "Design",
        description: "Crafting visuals that captivate and inspire. Elevate your brand with us"
    },
    {
        id: 2,
        name: "Web/App Development",
        description: "Designing websites that make your brand shine. Explore digital excellence with us"
    },
    {
        id: 3,
        name: "Copywriting",
        description: "Elevate your experience. Embrace excellence. Discover success with our innovative solutions"
    }
]

function Offer() {
    return (
        <div className='offer'>
            <div className='offer-text'>
                <h1>What We Offer</h1>
                <section></section>
            </div>
        </div>
    );
}

export default Offer;