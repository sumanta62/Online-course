import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Servise = ({ service }) => {
    const {id, details, picture, title, } = service;

    return (
        <div>
            <div className="card bg-blue-50 shadow-xl transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring cursor-pointer">
                <PhotoProvider>
                    <PhotoView src={picture ? picture : 'No IMG'}>
                <figure><img className='w-full h-52' src={picture ? picture : 'No IMG'} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body pt-2">
                    <h2 className="card-title font-bold gap-0">
                        {title ? title : ' No title'}
                    </h2>
                    <p className='text-sm'>{details ? details?.slice(0, 100) + ' ....' : "No details"}</p>
                    <div className="card-actions justify-between items-center mt-4 font-bold">
                      
                        <Link to={`/details/${id}`}>
                            <button className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servise;