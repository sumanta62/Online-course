import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        fetch(`banner.json`)
            .then(res => res.json())
            .then(data => setBanner(data))

    }, [])
    return (
        <div className='-mb-10'>
            < Carousel 
            infiniteLoop
            autoPlay
            interval={3000}
            showArrows={true}
             >
                {
                    banner.map(banner =>
                        <div>
                            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner.img})` }}>
                                <div className="hero-overlay"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-lg">
                                        <h1 className="mb-5 text-3xl md:text-4xl font-bold ">{banner?.title ? banner?.title : "No Title"} </h1>
                                        <p className="mb-5 text-sm md:text-md text-gray-200">{banner?.decsription ? banner?.decsription.slice(0, 100) + ' ...' : "No decsription "}</p>
                                        <button className="btn btn-info">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </ Carousel>
        </div>
    );
};

export default Banner;