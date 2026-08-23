import React from 'react'
import Cards from '../components/Cards'

const Projects = ({ projects }) => {
  return (
    <div className='mx-auto mt-28 flex max-w-6xl flex-col sm:mt-60'>
      <div className='font-mono text-2xl text-amber-200'><span className='text-white'>04</span>.Projects:-</div>
      <h1 className='mt-8 text-4xl font-bold sm:mt-10 sm:text-5xl md:text-6xl'>Some Things I've  <span className='text-cyan-400'>Built</span></h1>
      <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map(function(elem, idx){
          return (
        <Cards key={idx} icon={elem.icon} title={elem.title} desc={elem.desc} skills={elem.skills} link={elem.link} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects