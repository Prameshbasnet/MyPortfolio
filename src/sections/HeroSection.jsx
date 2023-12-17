import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div className='mt-[100px] px-7 flex flex-col sm:flex-row lg:mx-[50px]'>
                <div>
                    <h2 className='my-10 text-5xl'>Welcome</h2>
                    <p className='text-3xl mb-7'>
                        👨‍💻 Hey, I'm Pramesh Basnet,
                    </p>
                    <p className='text-xl'>
                        A React developer building cool things on the web.

                        Coding and playing guitar 🎸 are my two favorite languages.
                    </p>
                    <h2 className='mt-[80px] text-3xl'>Let's connect</h2>
                    <p className='mb-10'>I don't bite, I promise you.</p>
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