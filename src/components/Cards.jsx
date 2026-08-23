import React from 'react'

const Cards = ({icon, title, desc, skills, link}) => {
  return (
    <article className='group flex h-full min-w-0 flex-col border border-gray-800 bg-gray-900/60 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] sm:p-6'>
        <div className='flex items-center justify-between'>
          <span className='text-4xl' aria-hidden='true'>{icon}</span>
          <a className='text-2xl text-amber-200 transition-transform duration-300 group-hover:rotate-45' href={link} target='_blank' rel='noreferrer' aria-label={`Open ${title} project`}>
            ↗
          </a>
        </div>
        <h2 className='mt-5 text-xl font-bold text-white sm:mt-6 sm:text-2xl'>{title}</h2>
        <p className='mt-4 flex-1 leading-relaxed text-gray-400'>{desc}</p>
        <div className='mt-6 flex flex-wrap gap-2'>
            {skills.map(function(skill, idx){
              return <span className='rounded-full border border-gray-700 px-3 py-1 text-sm text-cyan-300' key={idx}>{skill}</span>
            })}
        </div>
    </article>
  )
}

export default Cards