import React from 'react'


const Home = () => {
  return (
    <div className='mx-auto mt-20 flex max-w-6xl flex-col gap-4 p-2 sm:mt-28 sm:gap-6'>
      <p className='font-mono text-xl text-amber-200 sm:text-2xl'>Hi, I am</p>
      <h1 className='break-words text-5xl font-bold text-cyan-400 sm:text-7xl lg:text-8xl'>Subhajit Beshra</h1>
      <h2 className='max-w-5xl text-4xl font-bold text-gray-300 sm:text-6xl lg:text-7xl'>I build things that are useful.</h2>
      <div className='mt-3 flex flex-col gap-3 self-start sm:flex-row sm:gap-6'>
          <a href="#projects" className='rounded 
          border border-amber-200 px-6 py-3 hover:-translate-y-2 transition-all duration-300' >View my work</a>
          <a href="/Resume.pdf" download className="rounded bg-amber-200 px-6 py-3 text-black hover:-translate-y-2 transition-all duration-300">Download resume</a>
        </div>
    </div>
  )
}

export default Home
