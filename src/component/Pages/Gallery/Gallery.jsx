import React, { useEffect, useState } from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetch(`gallery.json`)
            .then(res => res.json())
            .then(data => {
                setGallery(data);

            })
    }, [])
    return (
        <div className='bg-light'>
            <section className="py-6 sm:py-12 ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold pb-2">Gallery</h2>
                        <p className="font-serif text-sm dark:text-gray-400">Intra-oral photos are photos that are taken of your teeth, gums and oral tissue. <br /> These photos may be of a single tooth, a group of teeth, or any area of your mouth.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            gallery.map((galleryImg, i) =>
                                <article className="flex flex-col cursor-zoom-in overflow-hidden">
                                    <PhotoProvider>
                                        <PhotoView src={galleryImg?.img ? galleryImg?.img : ' No img'}>
                                            <figure><img className='w-full h-52 transform hover:scale-105' src={galleryImg?.img ? galleryImg?.img : ' No img'} alt="" /></figure>
                                        </PhotoView>
                                    </PhotoProvider>
                                </article>
                            )

                        }
                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;