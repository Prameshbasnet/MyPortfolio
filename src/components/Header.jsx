import React from 'react'
import Profile from '../assets/profile.jpg'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='m-5 flex flex-col sm:flex-row sm:m-3'>
                <div className="navbar bg-base-100 gap-5">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={Profile} />
                        </div>
                    </div>

                    <div className="flex flex-col cursor-pointer">
                        <a className="text-3xl flex">PRAMESH BASNET</a>
                        <a href="#" className=''>React Developer</a>
                    </div>
                </div>
                <div className='flex m-5 gap-5'>
                    <button className='btn glass'>
                        <Link to='/'>
                            Home
                        </Link>
                        
                    </button>
                    <button className='btn glass'>
                        <Link to='/blog'>
                            Blog
                        </Link>
                        
                    </button>
                    <button className='btn glass'>
                        <FaInstagram />
                    </button>
                    <button className='btn glass'>
                        <FaLinkedin />
                    </button>
                    <div className='mt-3'>
                        <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" value="black" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header