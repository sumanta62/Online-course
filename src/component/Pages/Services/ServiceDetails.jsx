import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className='pt-5 pb-2 px-5 bg-blue-100'>
            <div>
                <h1 className='text-center text-3xl md:text-4xl font-bold my-4'>Services Details</h1>
                <p className='text-center mb-7'>You can see all the details of this course here</p>
                <div className="grid grid-cols-1 md:grid-cols-2 m-auto w-full md:w-3/3 lg:w-4/6 p-6 bg-blue-50 space-y-6 overflow-hidden rounded-lg shadow-md ">

                        <div className='cursor-zoom-in'>
                            <PhotoProvider>
                                <PhotoView src={service?.picture ? service?.picture : "NO IMG"}>
                                    <img src={service?.picture ? service?.picture : "NO IMG"} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg" />
                                </PhotoView>
                            </PhotoProvider>
                        </div>
                        <div className=" mx-3">
                            <div className="">
                                <h2 className="mb-1 text-xl font-bold">{ service?.title ? service?.title : "No title"}</h2>
                                <p className="text-sm dark:text-gray-400 ">{service?.details ? service?.details : "No details"}</p>

                            </div>
                           <div className='mt-5'>
                           <Link to='/'>
                                <button className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Back Page</button>
                            </Link>
                           </div>
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;