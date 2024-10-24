import React from 'react'
import { DiCss3, DiHtml5 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa6'
import { SiNextdotjs, SiTypescript, SiVitest } from 'react-icons/si'

const About = () => {
  return (
    <section className="mb-16 mt-[200px]">
      <h3 className="subtitle">About me</h3>

      <div className="content max-w-[600px] m-auto text-center">
        <p>Front-end developer with over 14 years of experience, specialized in creating modern and functional interfaces. My expertise ranges from interface design to the full implementation of web applications, always with a focus on cuttingedge technology.</p>
        <p>Throughout my career, I’ve developed projects that bridge design and programming, ensuring aesthetically pleasing and high-performance solutions. I specialize in React and its ecosystem, where I apply best practices to deliver dynamic and responsive interfaces, always prioritizing clean, efficient, and maintainable code.</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 text-5xl text-slate-700">
        <DiHtml5 />
        <DiCss3 />
        <SiTypescript />
        <FaReact />
        <SiNextdotjs />
        <SiVitest />
      </div>
    </section>
  )
}

export default About