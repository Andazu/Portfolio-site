import React from 'react';
import sw6 from '../assets/ekstrabladet.png';
import sw5 from '../assets/educado.png';
import sw4 from '../assets/6502.jpg';
import sw3 from '../assets/livingroom.png';
import sw2 from '../assets/sw2.png';
import Card from './Card'; // Import the Card component

const Work = () => {
  return (
    <div
      name='work'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-[80%] sm:pt-40 md:pt-80 lg:pt-[35%]'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#72DE6A]'>
            Work
          </p>
          <p className='py-6'>
            Check out the projects i have participated in during my time at
            Aalborg University
          </p>
        </div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Use the Card component for each card */}
          <Card
            image={sw6}
            title='React JS Application'
            demoLink='/'
            codeLink='/'
          />
          <Card image={sw5} title='Educado App' demoLink='/' codeLink='/' />
          <Card image={sw4} title='6502 Project' demoLink='/' codeLink='/' />
          <Card
            image={sw3}
            title='Living Room Design'
            demoLink='/'
            codeLink='/'
          />
          <Card image={sw2} title='SW2 Project' demoLink='/' codeLink='/' />
        </div>
      </div>
    </div>
  );
};

export default Work;
