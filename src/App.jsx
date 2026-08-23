import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

const App = () => {
  const projects = [
    {
      icon: '📑',
      title: 'My First Blog',
      desc: 'A responsive blog writing application that allows users to create, edit, and publish blog posts with a clean and user-friendly      interface. Built to demonstrate front-end development skills, responsive design, and content management capabilities.',
      skills: ['HTML', 'CSS'],
      link: 'https://subhajit-beshra.github.io/from-confusion-to-confidence/'
    },
    {
      icon: '🛒',
      title: 'Future-Fits',
      desc: 'A modern fashion e-commerce website built with HTML, CSS, JavaScript and Firebase. Future_Fits allows users to browse products, view product details, manage their cart, create accounts, and track their orders through a personal dashboard.',
      skills: ['HTML', 'CSS', 'JS', 'Firebase', 'Firestore'],
      link: 'https://subhajit-beshra.github.io/Future_Fits/'
    },
    {
      icon: '❤️‍🩹',
      title: 'VitaCare',
      desc: 'VitaCare is a mobile healthcare application built with React Native + Expo that helps users manage important health information and understand medical reports more easily.',
      skills: ['React-Native', 'CSS', 'Firebase', 'Firestore', 'Gemini API', 'Expo Go'],
      link: 'https://github.com/Subhajit-Beshra/VitaCare'
    },
    {
      icon: '💼',
      title: 'JobBoard',
      desc: 'A job-search platform designed to make finding relevant job opportunities easier and more organized. The project focuses on displaying job listings in a clean interface, allowing users to explore opportunities based on their interests and requirements.',
      skills: ['HTML', 'Tailwind CSS', 'Firebase', 'Firestore'],
      link: 'https://subhajit-beshra.github.io/Job-Board/'
    }
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-black p-4 text-white scroll-smooth sm:p-6">
      <Navbar />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects projects = {projects}/>
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default App