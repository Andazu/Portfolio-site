import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#72DE6A]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Anders i love peanut butter jelly sandwiches yay yippeee</p>
                </div>
                <div>
                    <p>I am eager to apply the knowledge and skills I've acquired during my studies and am enthusiastic about continuing to learn and grow in a dynamic workplace that challenges and inspires me.
                    I am currently seeking opportunities in software development, where I can contribute to innovative projects and collaborate with talented professionals. If you're looking for a driven and dedicated software developer, I would love to connect and explore how I can add value to your team.
                    Feel free to reach out if you have opportunities that align with my skills and aspirations, or even if you think I might be a good fit in a different role.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About