import React, {  useEffect, useState } from 'react';
import Servise from './Servise';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch(`https://data-server-side-sumanta62.vercel.app/courses`)
        .then(res => res.json())
        .then(data => {
            setServices(data);
            
        })
    }, [])

  
    return (
        <div className='p-5  bg-blue-50'>
            <h1 className='text-center text-3xl md:text-4xl font-bold py-4'> Our Services </h1>
            <p className='text-center text-sm mb-7'>By learning this course you will be able to create a dynamic website</p>
            <div className=' w-11/12 mx-auto'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service=> <Servise key={service._id}  service={service}></Servise>)
                    }
                </div>
            </div>
           
        </div>
    );
};

export default Services;