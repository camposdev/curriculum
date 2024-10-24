import React from 'react'
import SocialLinks from './SocialLinks'
import { FaReact } from 'react-icons/fa6'
import VideoBackground from './VideoBackground'

const Header = () => {
  return (
    <>
      <header className="text-center relative z-10">
        <div className="container">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl sm:text-5xl bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 inline-block py-3 px-1 text-transparent bg-clip-text tracking-tighter">
              Felipe Campos
            </h1>
            <h2 className="font-syne text-xl sm:text-2xl text-slate-400 mt-2">Frontend Engineer</h2>
          </div>

          <SocialLinks />

          <div className="bg-gradient-to-r from-slate-700/0 via-slate-700 to-slate-700/0 h-[1px] w-full relative">
            <div className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-b-[75px] border-b-slate-700 border-r-[50px] border-r-transparent -top-[75px] left-1/2 -ml-[48px] blur-2xl scale-[3] -z-10"
            ></div>
            <div className="bg-gradient-to-r from-slate-700/0 via-slate-400 to-slate-700/0 w-full h-[2px] absolute t-0 l-0 blur-md"></div>
            <div className="bg-gradient-to-r from-slate-700/0 via-slate-400 to-slate-700/0 w-1/2 h-[2px] absolute t-0 l-0 translate-x-1/2 blur-sm"></div>
            <div className="absolute t-0 l-0 w-1/2 translate-x-1/2 -translate-y-1/2 flex justify-center">
              <FaReact className="text-5xl text-slate-40 animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </div>
      </header>

      <div className="opacity-100 absolute w-full h-[500px] top-[100px] xl:top-[120px] left-1/2 -z-10 overflow-hidden max-w-[1000px] -translate-x-1/2">
        <VideoBackground />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900/0 to-slate-900 scale-105"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-900 via-slate-900/0 to-slate-900 scale-105"></div>
        <div className="absolute inset-0 w-full h-full bg-slate-900/70"></div>
      </div>
    </>
  )
}

export default Header