import React from 'react';
import { Link } from 'react-router-dom';
import Ecommerce from '../assets/Ecommerce.png';
import NGO from '../assets/NGO.png'

const ProjectSection = () => {
    return (
        <div>
            <h2 className='text-center mt-11 text-4xl underline'>Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>
                <div className='sm:mb-9'>
                    <Link to='https://e-commerce-site-vert.vercel.app/'>
                        <div className='mx-auto'>
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                <div className="card-body">
                                    <h2 className="card-title">Ecommerce</h2>
                                    <p>A simple e-commerce site</p>
                                </div>
                                <figure>
                                    <img
                                        className='h-[250px]'
                                        src={Ecommerce}
                                        alt="ecommerce" />
                                </figure>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className=''>
                    <Link to='https://ngo-website-delta.vercel.app/'>
                        <div className='mx-auto'>
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                <div className="card-body">
                                    <h2 className="card-title">Ngo-website</h2>
                                    <p>A simple ngo site</p>
                                </div>
                                <figure>
                                    <img
                                        className='h-[250px]'
                                        src={NGO}
                                        alt="ngo" />
                                </figure>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
