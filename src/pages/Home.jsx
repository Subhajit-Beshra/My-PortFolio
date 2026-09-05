import React from 'react'


const Home = () => {
  return (
    <div className='mx-auto mt-20 flex max-w-6xl flex-col gap-4 p-2 sm:mt-28 sm:gap-6'>
      <p className='hero-enter font-mono text-xl text-amber-200 sm:text-2xl'>Hi, I am</p>
      <h1 className='hero-enter hero-enter-delay break-words text-5xl font-bold text-cyan-400 sm:text-7xl lg:text-8xl'>Subhajit Beshra</h1>
      <h2 className='hero-enter hero-enter-late max-w-5xl text-4xl font-bold text-gray-300 sm:text-6xl lg:text-7xl'>I build things that are useful.</h2>
      <div className='hero-enter hero-enter-late mt-3 flex flex-col gap-3 self-start sm:flex-row sm:gap-6'>
          <a href="#projects" className='rounded 
          border border-amber-200 px-6 py-3 transition-all duration-300 hover:-translate-y-2 hover:scale-105' >View my work</a>
          <a href="Resume.pdf" download className="rounded bg-amber-200 px-6 py-3 text-black transition-all duration-300 hover:-translate-y-2 hover:scale-105">Download resume</a>
        </div>
    </div>
  )
}

export default Home
