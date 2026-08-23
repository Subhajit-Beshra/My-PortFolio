import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col items-center gap-5 sm:flex-row sm:justify-between'>
      <a href='/' className='h-9 w-9 border border-amber-200 p-1 text-center font-mono text-amber-200'>SB</a>
      <div className='flex flex-wrap justify-center gap-x-4 gap-y-2 text-center font-mono text-sm text-amber-200 sm:justify-end sm:gap-6 sm:text-base'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>       
    </div>
  )
}

export default Navbar