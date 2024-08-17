import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#72DE6A]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Anders Mazen Youssef</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Hello! I'm a recent graduate with a Bachelor's degree in Software from Aalborg University Copenhagen, deeply passionate about the world of software development.
            With a solid foundation in software engineering and a diverse background in various roles, including retail, I am now fully committed to pursuing a career that aligns with my academic training and passion for technology.</p>
            <div className=''>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#244621] hover:border-[#244621] duration-300'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        {/* Change arrow to down arrow, or fix rotation */}
                        <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home