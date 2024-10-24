import React from 'react'
import SocialLinks from './SocialLinks'
import { GiCoffeeCup } from 'react-icons/gi'

const Contact = () => {
  return (
    <section className='pt-20'>
      <h3 className="subtitle">Contact me</h3>

      <div className='mt-10'>
        <div className='flex items-center justify-center mb-10 text-slate-400 gap-6'>
          <a href="tel:+5548996623917" target="_blank" className="hover:text-slate-300">+55 (48) 99662-3917</a>
          <span>
            <GiCoffeeCup className='text-slate-600' />
          </span>
          <a href="mailto:felipecamposdev@gmail.com" target="_blank" className="hover:text-slate-300">felipecamposdev@gmail.com</a>
        </div>

        <SocialLinks />
      </div>
    </section>
  )
}

export default Contact