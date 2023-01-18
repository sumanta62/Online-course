import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/attachment_123360235-removebg-preview.png'


const Header = () => {

    const manuItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <li><Link to='/profile'>Profile</Link></li>
</React.Fragment>


    return (
        <div className='bg-sky-300'>
            <div className='px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                <div className="navbar-start">
                        <div className='flex gap-2 items-center'>
                            <Link to='/' className="">
                                <img src={logo} className="w-14" alt="" />
                            </Link>
                            <span className="text-2xl md:text-3xl font-bold">Online Course</span>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sky-800 font-bold">
                            {manuItems}
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-1 text-sky-800 font-bold">
                            {manuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;