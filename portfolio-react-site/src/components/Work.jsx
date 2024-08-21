import React from 'react';
import sw6 from '../assets/sw6.png';
import sw5 from '../assets/sw5.png';
import sw4 from '../assets/sw4.png';
import sw3 from '../assets/sw3.png';
import sw2 from '../assets/sw2.png';
import sw1 from '../assets/sw2.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/custom-carousel.css'; // Assuming you add the CSS here

const items = [
  {
    title: 'Project 1',
    image: sw1,
    semester: 'Fall 2021',
    description: 'This is the description for Project 1.',
  },
  {
    title: 'Smart Device Management',
    image: sw2,
    semester: 'Spring 2022',
    description: 'This is the description for Project 2.',
  },
  {
    title: 'Task Management Software Solution',
    image: sw3,
    semester: 'Fall 2022',
    description: 'This is the description for Project 3.',
  },
  {
    title: 'Language Development, Assembly 6502',
    image: sw4,
    semester: 'Spring 2023',
    description: 'This is the description for Project 4.',
  },
  {
    title: 'The Educado Initiative',
    image: sw5,
    semester: 'Fall 2023',
    description: 'This is the description for Project 5.',
  },
  {
    title: 'Ekstra Bladet Recommender Project',
    image: sw6,
    semester: 'Spring 2024',
    description:
      'Enhanced the user experience and improved user engagement on Ekstra Bladet&rsquo;s mobile application by developing a highly modular software system that supports a machine‑learning‑based recommender model. Provided a complete system and displayed a personalised news feed to users on an overhauled mobile application.',
  },
];

const Work = () => {
  return (
    <div
      name='work'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f] pt-[80%] sm:pt-40 md:pt-80 lg:pt-[35%]'
    >
      {/* Container */}
      <div className=' mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#72DE6A] max-w-[85px]'>
            Work
          </p>
          <p className='py-6'>
            Check out the projects I have participated in during my time at
            Aalborg University
          </p>
        </div>

        {/* Carousel container*/}
        <div className='justify-center w-full h-full pt-20'>
          {/* Carousel component */}
          <div className='max-w-[1200px] mx-auto'>
            {items.map(({ title, image, semester, description }, index) => (
              <div key={index} className='slide flex flex-col h-full py-6'>
                <div className='w-full'>
                  <p className='text-4xl font-bold text-center text-gray-300'>
                    {title}
                  </p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center h-[45vh] px-24'>
                  <img
                    src={image}
                    className='w-2/3 h-5/6 object-contain rounded-md'
                  />
                  <div className='flex flex-col text-left pl-12 w-1/2 max-h-72'>
                    <p className='border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]'>
                      {semester}
                    </p>
                    <p className='pt-6'>{description}</p>
                    <div className='flex flex-row p-8 justify-center w-full h-full space-x-20'>
                      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300'>
                        View demo
                      </button>
                      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300'>
                        View code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
