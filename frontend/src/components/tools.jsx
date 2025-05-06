import React from 'react'
import Navbar from './shared/Navbar'
import { motion } from 'framer-motion'

const Tools = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl my-10'>Tools</h1>
        <div className='flex-1 h-[88vh] overflow-y-auto  no-scrollbar pb-5'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://jnxuan-jh-resume-screening.hf.space/?embed=true&embed_options=show_toolbar#41183b1a"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Resume Screening Tool"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Tools;
