import React from 'react'
import Form from '../components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='mx-auto mt-28 flex max-w-6xl flex-col sm:mt-60'>
      <div className='font-mono text-2xl text-amber-200'><span className='text-white'>05</span>.Contact:-</div>
      <h1 className='mt-8 text-4xl font-bold sm:mt-10 sm:text-5xl md:text-6xl'>Let's   <span className='text-cyan-400'>Connect</span></h1>
      <Form />
      <div className='mt-20 mb-10 flex flex-row justify-center gap-4'>
        <a href='https://github.com/Subhajit-Beshra'><FontAwesomeIcon icon={faGithub} className='text-3xl'/></a>
        <a href='https://www.linkedin.com/in/subhajit-beshra-b57b35360/'><FontAwesomeIcon icon={faLinkedin} className='text-3xl'/></a>
      </div>
    </div>
  )
}

export default Contact