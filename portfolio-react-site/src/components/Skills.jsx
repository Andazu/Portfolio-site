import React from 'react';

import {
  FaReact,
  FaJava,
  FaGit,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import { BsFiletypeSql } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full h-screen bg-[#0a192f] text-gray-300 pt-80 sm:pt-40'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#72DE6A]'>
            Skills
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='hover:scale-110 duration-500 py-8'>
            <FaReact size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <FaJava size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <FaHtml5 size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <FaCss3Alt size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <BsFiletypeSql size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <IoLogoJavascript size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <FaDocker size={100} color='white' className='mx-auto' />
          </div>
          <div className='hover:scale-110 duration-500 py-8'>
            <FaGit size={100} color='white' className='mx-auto' />
          </div>
        </div>
        <p className='text-4xl font-bold text-center'>And more...</p>
      </div>
    </div>
  );
};

export default Skills;
