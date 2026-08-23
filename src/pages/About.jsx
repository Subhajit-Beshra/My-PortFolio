import React from 'react'

const About = () => {
  return (
    <div className='mx-auto mt-28 flex max-w-6xl flex-col sm:mt-60'>
      <div className='font-mono text-amber-200 text-2xl'><span className='text-white'>02</span>.About Me:-</div>
      <h1 className='mt-8 text-4xl font-bold sm:mt-10 sm:text-6xl'>Who I <span className='text-cyan-400'>Am</span></h1>
      <div className='mt-10 flex flex-col items-center gap-12 text-xl md:flex-row md:items-start'>
        <div className=' text-gray-300 max-w-2xl'>
          <p className='leading-relaxed text-gray-300'>
            Coming from a <span className='text-white font-bold'>pure science background</span>, my journey into technology and coding wasn't something I had planned from the beginning. But I was always fascinated by how software works and how a few lines of code could turn an idea into something real. That curiosity gradually turned into a passion for programming and building applications.</p> 
          <br /> 
          <p>Today, I'm a 1st year BCA student at <span className='text-white font-bold'>Midnapore College</span> and continuously exploring <span className='text-white font-bold'>Web development</span>, <span className='text-white font-bold'>Mobile applications</span>, and <span className='text-white font-bold'>AI</span>. I enjoy learning by building projects, solving problems, and experimenting with new technologies. For me, coding isn't just about writing programs—it's about turning ideas into something useful.
          </p>
        </div>
        <div className='shrink-0'>
          <img className='h-64 w-64 rounded border-2 border-amber-200 object-cover transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] sm:h-80 sm:w-80' src='https://avatars.githubusercontent.com/u/205399121?v=4' />
        </div>
      </div>
    </div>  
  )
}

export default About