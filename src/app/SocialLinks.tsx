import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { TbFileCv } from 'react-icons/tb'

const SocialLinks = () => {
  return (
    <ul className="flex justify-center gap-3 mb-12">
      <li>
        <Link href="#" className="text-2xl block p-2 transition-all hover:scale-125" title="Github">
          <FaGithub />
        </Link>
      </li>

      <li>
        <Link href="#" className="text-2xl block p-2 transition-all hover:scale-125" title="LinkedIn">
          <FaLinkedinIn />
        </Link>
      </li>

      <li>
        <Link href="#" className="text-2xl block p-2 transition-all hover:scale-125" title="WhatsApp">
          <FaWhatsapp />
        </Link>
      </li>

      <li>
        <Link href="#" className="text-2xl block p-2 transition-all hover:scale-125" title="Download CV">
          <TbFileCv />
        </Link>
      </li>
    </ul>
  )
}

export default SocialLinks