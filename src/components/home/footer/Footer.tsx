import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
     <footer className="bg-gradient-to-br from-base-300/90 to-base-200/80 backdrop-blur-md py-6 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center gap-4 mb-4">
            <Link
              href="https://github.com/amirrajj-dev"
              className="text-accent hover:text-accent transition-colors duration-300"
            >
              <FaGithub size={28} />
            </Link>
          </div>
          <p className="text-accent">
            © {new Date().getFullYear()} Amirhosein. All rights reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer