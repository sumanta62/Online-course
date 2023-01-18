import React from 'react';
import abouteImg from '../../../images/DMA_Blog_OnlineClassBullying_Image_Opt.jpg'

const Aboute = () => {
    return (
        <div className='-pt-10'>
            <section className="bg-indigo-100">
              
                    <div className="">
                        <div className=" hero" >
                            <div className="container flex items-center flex-col md:flex-col-2 justify-center mx-auto py-10 md:flex-row lg:justify-start">
                                <div className="flex w-full md:w-3/6 lg:2/5">
                                    <img src={abouteImg} alt="" className="object-contain w-96 md:w-80 lg:w-96 m-auto " />
                                </div>
                                <div className=" justify-center items-center w-11/12 md:w-3/6  lg:text-left  md:mx-10">
                                    <h1 className="text-3xl md:text-4xl font-bold leading-none text-center lg:text-left mt-5 md:mt-0">About Us</h1>
                                    <p className="mt-6 mb-2 text-sm text-justify leading-5">Hi, i'm Sumanta Majumder. A task was given in the WhatsApp group, and it said 3 pages. I have completed all the requirements mentioned on the homepage, about, and profile. Because I have extra time, I create additional sections, galleries, testimonials, and footers.</p>
                                    <p className=" mb-3 text-sm sm:mb-12  text-justify leading-5"> I will prove myself to be an essential asset to your company through my dedication, sincerity, and professionalism. I believe working for a reputed organization like your company will provide me with an excellent opportunity for my career.</p>
                                    <div className="flex space-y-4 sm:items-center justify-center  sm:justify-center md:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                        <button rel="noopener noreferrer" href="#" className="px-6 py-2 text-sm  font-semibold rounded bg-gradient-to-r from-green-300 to-blue-300 text-gray-900 transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring ">About Me</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>
        </div>
    );
};

export default Aboute;