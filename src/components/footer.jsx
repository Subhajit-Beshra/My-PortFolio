import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='mt-12 border-t border-slate-800 py-6 text-center text-sm text-slate-300'>
      <p>
        <FontAwesomeIcon icon={faCopyright} className='mr-2' />
        2026 Subhajit Beshra. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer