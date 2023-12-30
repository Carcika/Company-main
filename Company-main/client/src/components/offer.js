import React from 'react';
import './offer.css';
import svg from '../assets/servicesImg2.svg'
import code from '../assets/code1.svg'
import design from '../assets/design1.svg'
import copywriting from '../assets/copywriting1.svg'


const data = [
    {
        id: 1,
        name: "Web/App Development",
        description: "Designing websites that make your brand shine. Explore digital excellence with us",
        img: code
    },
    {
        id: 2,
        name: "Design",
        description: "Crafting visuals that captivate and inspire. Elevate your brand with us",
        img: design
    },
    {
        id: 3,
        name: "Copywriting",
        description: "Elevate your experience. Embrace excellence. Discover success with our innovative solutions",
        img: copywriting
    }
]

function Offer() {
    return (
        <div className='offer'>
            <div className='offer-text'>
                <h1>Welcome to our Web Development Services:</h1>
                <section></section>
            </div>
            <div className='imgSection'>
            <img className='offerImg' src={svg} />
            </div>
            <div className='items'>
                {data.map((res) => {
                    return (
                        <div className='itemsChild'>
                            <img src={res.img} />
                            <p>{res.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Offer;