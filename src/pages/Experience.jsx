import Reveal from '../components/Reveal'

const Experience = () => {
  const responsibilities = [
    'Developed responsive frontend interfaces using Next.js, React, TypeScript, and Tailwind CSS.',

    'Built backend REST APIs using Node.js and Express.js.',

    'Integrated MongoDB for database management and application data.',

    'Implemented authentication using email/password and Google OAuth, including email OTP verification and trusted-device support.',

    'Developed channel creation, video uploads, subscriptions, and in-app notification functionality.',

    'Integrated LiveKit for real-time video meetings.',

    'Integrated YouTube Data API for video discovery and Google Cloud Translation API for comment translation.',

    'Worked with Razorpay test-mode payment integration for membership plans.',

    'Deployed the frontend and backend using Render and worked on debugging and production configuration.'
  ]

  return (
    <div className='mx-auto mt-28 flex max-w-6xl flex-col sm:mt-60'>
      <Reveal>
        <div className='font-mono text-2xl text-amber-200'>
          <span className='text-white'>05</span>.Experience:-
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 className='mt-8 text-4xl font-bold sm:mt-10 sm:text-5xl md:text-6xl'>
          What I've <span className='text-cyan-400'>Worked On</span>
        </h1>
      </Reveal>

      <Reveal delay={160} className='mt-12 md:mx-8'>
        <article className='mb-6 border-l-2 border-amber-200 bg-gray-900/60 p-6 sm:p-8'>
          <div className='flex flex-wrap items-center gap-3'>
            <h2 className='text-2xl font-bold sm:text-3xl'>Unified Mentor</h2>
            <span className='rounded-full border border-cyan-400/50 px-3 py-1 font-mono text-xs text-cyan-300'>
              CURRENT
            </span>
          </div>
          <p className='mt-4 leading-relaxed text-gray-300'>
            Currently working at Unified Mentor.
          </p>
        </article>
      </Reveal>

      <Reveal delay={240} className='md:mx-8'>
        <article className='border-l-2 border-cyan-400 bg-gray-900/60 p-6 sm:p-8'>
          <p className='font-mono text-sm tracking-widest text-amber-200'>EXPERIENCE</p>
          <h2 className='mt-3 text-2xl font-bold sm:text-3xl'>Elevance Skills</h2>
          <h3 className='mt-2 text-xl text-cyan-300'>MyTube</h3>
          <p className='mt-4 max-w-3xl leading-relaxed text-gray-300'>
            Contributed to MyTube, a video discovery and creator platform, working across
            frontend, backend, and application functionality.
          </p>

          <ul className='mt-6 space-y-3 text-gray-300'>
            {responsibilities.map((responsibility) => (
              <li key={responsibility} className='flex gap-3 leading-relaxed'>
                <span className='text-cyan-400' aria-hidden='true'>▹</span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>

          <a
            href='https://mytube-w8ah.onrender.com/'
            target='_blank'
            rel='noreferrer'
            className='mt-7 inline-flex font-mono text-amber-200 transition-colors hover:text-cyan-300'
          >
            View MyTube <span className='ml-2' aria-hidden='true'>↗</span>
          </a>
        </article>
      </Reveal>
    </div>
  )
}

export default Experience