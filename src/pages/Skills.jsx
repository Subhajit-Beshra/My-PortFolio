import React from 'react'
import Reveal from '../components/Reveal'

const Skills = () => {
  return (
    <div className='mx-auto mt-28 flex max-w-6xl flex-col sm:mt-60'>
      <Reveal><div className='font-mono text-2xl text-amber-200'><span className='text-white'>03</span>.Skills:-</div></Reveal>
      <Reveal delay={80}><h1 className='mt-8 text-4xl font-bold sm:mt-10 sm:text-5xl md:text-6xl'>Technologies I <span className='text-cyan-400'>Know</span></h1></Reveal>
      <div className='mt-16 grid grid-cols-1 gap-5 md:mx-8 md:grid-cols-2 lg:grid-cols-3'>
        <Reveal delay={0}><div className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800'>
          <h2 className='font-mono text-sm tracking-widest text-amber-200'>LANGUAGES</h2>
          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Java</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Python</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>C (learning)</span>
          </div>
        </div></Reveal>
        <Reveal delay={100}><div className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800'>
          <h2 className='font-mono text-sm tracking-widest text-amber-200'>FRONTEND</h2>
          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>HTML</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>CSS</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>React</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Tailwind CSS</span>
          </div>
        </div></Reveal>
        <Reveal delay={200}><div className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800'>
          <h2 className='font-mono text-sm tracking-widest text-amber-200'>BACKEND</h2>
          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Firebase</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Supabase</span>
          </div>
        </div></Reveal>
        <Reveal delay={300}><div className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800'>
          <h2 className='font-mono text-sm tracking-widest text-amber-200'>ANDROID</h2>
          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>React Native</span>
          </div>
        </div></Reveal>
        <Reveal delay={400}><div className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800'>
          <h2 className='font-mono text-sm tracking-widest text-amber-200'>DATABASE</h2>
          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>MySQL</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Firestore</span>
          </div>
        </div></Reveal>
        <Reveal delay={500}><div className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800'>
          <h2 className='font-mono text-sm tracking-widest text-amber-200'>TOOLS</h2>
          <div className='mt-5 flex flex-wrap gap-3'>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>VS Code</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Git & GitHub</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Windows Terminal</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Ubuntu</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Netlify</span>
            <span className='rounded border border-gray-600 px-3 py-2 text-gray-200'>Figma</span>
          </div>
        </div></Reveal>
      </div>

    </div>
  )
}

export default Skills