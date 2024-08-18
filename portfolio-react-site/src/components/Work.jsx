import React from 'react'
import sw6 from '../assets/ekstrabladet.png'
import sw5 from '../assets/educado.png'
import sw4 from '../assets/6502.jpg'
import sw3 from '../assets/livingroom.png'
import sw2 from '../assets/sw2.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flox-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#72DE6A]'>Work</p>
          <p className='py-6'>// CHeck out some of my recent work</p>
        </div>

        {/* Grid */}
      <div style={{backgroundImage: `url(${sw3})`}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work