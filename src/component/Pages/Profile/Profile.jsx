import React from 'react';
import './Profile.css'
import { BsGithub, BsLinkedin, BsPersonFill } from "react-icons/bs";
import { MdCall, MdEmail } from "react-icons/md";

const Profile = () => {
    return (
        <div className='py-14 bg-cyan-200'>
            <div className="max-w-md m-auto space-y-9 p-6 pb-9 rounded-md shadow-md bg-sky-100 text-gray-900">
                <BsPersonFill className='profile-icon'></BsPersonFill>
                <div className="mt-6 space-y-2  ">
                    <div className='flex gap-2 items-center '>
                        <BsPersonFill className='text-2xl'></BsPersonFill>
                        <span>Sumanta Majumder</span>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <MdCall className='text-lg'></MdCall>
                        <span>+880 1917123225</span>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <MdEmail className='text-lg'></MdEmail>
                        <span>sumantamajumder62@gmail.com</span>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <BsGithub className='text-lg'></BsGithub>
                        <span>https://github.com/sumanta62</span>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center '>
                        <BsLinkedin className='text-lg'></BsLinkedin>
                        <span>https://www.linkedin.com/in/sumanta-majumder/</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;