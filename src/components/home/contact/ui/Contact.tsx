"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { sectionVariants } from '@/data/varients'
import ContactForm from './ContactForm'
import BackgroundParticles from '@/components/shared/BackgroundParticles'
const Contact = () => {
  return (
    <motion.section
        custom={2}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        id="contact"
        className="relative min-h0[40vh] p-6 py-16 overflow-hidden"
      >
        <BackgroundParticles count={40} speed={3.5} />
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary text-center mb-10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
          Get in Touch
        </h2>
        <ContactForm />
      </motion.section>
  )
}

export default Contact