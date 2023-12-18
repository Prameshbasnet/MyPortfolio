import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div>
            <div className='mt-[100px] px-7 flex flex-col sm:flex-row lg:mx-[50px]'>
                <div>
                    <h2 className='my-10 text-5xl'>Welcome</h2>
                    <p className='text-3xl mb-7'>
                        👨‍💻 Hey,
                        <span>
                            <div className="diff aspect-[16/9] h-[50px] w-[400px] mt-4">
                                <div className="diff-item-1">
                                    <div className="bg-primary text-primary-content text-3xl font-black grid place-content-center">I'm Pramesh Basnet,</div>
                                </div>
                                <div className="diff-item-2">
                                    <div className="bg-base-200 text-3xl font-black grid place-content-center"></div>
                                </div>
                                <div className="diff-resizer"></div>
                            </div>
                        </span>
                        
                    </p>
                    <p className='text-xl'>
                        A React developer building cool things on the web.

                        Coding and playing guitar 🎸 are my two favorite languages.
                    </p>
                    <div className='flex my-16 items-center gap-4'>
                        <div>
                            <h2 className='text-3xl'>Let's connect</h2>
                            <p className=''>I don't bite, I promise you.</p>
                        </div>

                        <div className=' text-4xl'>
                            <Link to='https://instagram.com/pramesh__basnet'>
                                <FaInstagram />
                            </Link>
                        </div>

                    </div>



                </div>
                <div>
                    <img
                        className='h-full'
                        src="https://mwarrenarts.com/media/pages/home/dd5e6070cf-1698429838/mwarren-portrait-illustration_960x960.jpg"
                        alt="" />
                </div>



            </div>

        </div>
    )
}

export default HeroSection