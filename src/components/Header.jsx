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
                </div>
            </div>

        </div>
    )
}

export default Header