import React from 'react'

type TProps = {
  role: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const ExperienceCard = ({ role, company, period, description, technologies }: TProps) => {
  return (
    <article className="max-w-[600px] m-auto p-[1px] rounded-xl bg-gradient-to-br from-slate-400 via-slate-900 to-slate-600 shadow-md">
      <div className="p-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl">
        <header className="text-center">
          <h4 className="font-syne font-bold text-base">
            {role} <span className="font-normal">at</span> {company}
          </h4>
          <span className="text-xs italic text-slate-400">
            {period}
          </span>
        </header>

        <div className="my-6 text-sm text-justify text-slate-300 italic">
          {description.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        
        <footer>
          <h5 className="text-[9px] text-center text-slate-500 uppercase tracking-[5px] mb-2">Technologies</h5>

          <ul className="flex flex-wrap gap-1 justify-center">
            {technologies.map((item, index) => 
              <li className="text-xs py-[2px] px-2 bg-slate-900 rounded-full" key={index}>{item}</li>
            )}
          </ul>
        </footer>
      </div>
    </article>
  )
}

export default ExperienceCard