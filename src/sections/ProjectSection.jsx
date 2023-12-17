import React from 'react';
import { Link } from 'react-router-dom';
import Ecommerce from '../assets/Ecommerce.png'

const ProjectSection = () => {
    return (
        <div>
            <div>
                <h2 className='text-center mt-11 text-4xl underline'>Projects</h2>
                <div>
                    <Link to='https://e-commerce-site-vert.vercel.app/'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 mx-auto'>
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                                <div className="card-body">
                                    <h2 className="card-title">Ecommerce</h2>
                                    <p>A simple e-commerce site</p>
                                </div>
                                <figure><img src={Ecommerce} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default ProjectSection;
