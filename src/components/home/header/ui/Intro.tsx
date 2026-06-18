"ue client"
import React from 'react'
import { FaTelegram , FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { introVariants } from '@/data/varients';

const Intro = () => {
  const goToContactMeForm = ()=>{
    const contactMeForm = document.querySelector('#contact') as HTMLDivElement;
    contactMeForm.scrollIntoView({ behavior: "smooth" });
  }
  return (
      <motion.div className="space-y-8 text-center flex-7/12">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={introVariants}
            className="text-4xl pt-8 sm:pt-4 md:pt-0 md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
          >
            {Array.from("Amirhosein").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {"  "}
             {Array.from("Rajaei").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={introVariants}
            className="text-lg md:text-xl text-accent max-w-lg mx-auto"
          >
            Full-Stack Developer | Crafting Innovative Web Solutions
          </motion.p>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={introVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto"
          >
            <button
              onClick={goToContactMeForm}
              className="btn btn-accent btn-lg"
            >
              <FaEnvelope />
              Contact Me
            </button>
            <Link
              href="https://t.me/amirajj_dev"
              className="btn btn-lg btn-primary"
            >
              <FaTelegram size={24} />
              Telegram
            </Link>
            <Link
              href="https://github.com/amirrajj-dev"
              className="btn btn-soft btn-accent btn-lg"
            >
              <FaGithub size={24} />
              View My GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/amirhosein-rajaei"
              className="btn btn-lg btn-secondary"
            >
              <FaLinkedin size={24} />
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>
  )
}

export default Intro