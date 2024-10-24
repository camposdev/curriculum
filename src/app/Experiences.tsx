'use client'

import ExperienceCard from '@/components/ExperienceCard'
import TimelineSeparator from '@/components/TimelineSeparator'
import React, { useRef, useState } from 'react'

const Experiences = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const sectionRef = useRef<null | HTMLElement>(null)

  return (
    <section ref={sectionRef} className={`relative mb-16 overflow-hidden transition-all ${isCollapsed ? 'h-auto' : 'h-[500px]'}`}>
      <h3 className="subtitle">experiences</h3>

      <TimelineSeparator year="2024" start />

      <ExperienceCard
        role="Specialist Front-End Engineer"
        company="Globo"
        period="08/2022 - 09/2024"
        description={['➔ Responsible for the architecture and development of a project started from scratch, ensuring scalability and code standards.']}
        technologies={['React', 'TypeScript', 'Material UI', 'React Query', 'Vite', 'Vitest']}
      />

      <TimelineSeparator year="2022" />

      <ExperienceCard
        role="Senior Front-End Engineer"
        company="Paralenz"
        period="10/2021 - 07/2022"
        description={
          [
            '➔ Maintenance and development of new features in a globally used application for divers, utilizing React Native, GraphQL, and TypeScript.',
            '➔ I refactored legacy class components into functional components using hooks and TypeScript, improving code efficiency and maintainability.'
          ]
        }
        technologies={['React', 'TypeScript', 'React Native', 'GraphQL', 'Jest', 'Enzyme']}
      />

      <TimelineSeparator year="2021" />

      <ExperienceCard
        role="Senior Front-End Engineer"
        company="Crowdform"
        period="05/2020 - 01/2021"
        description={
          [
            '➔ Front-end development of various types of applications such as websites, e-commerce platforms, and apps for the agency&apos;s clients.'
          ]
        }
        technologies={['React', 'TypeScript', 'React Native', 'Shopify']}
      />

      <TimelineSeparator year="2020" />

      <ExperienceCard
        role="Senior Front-End Engineer"
        company="Involves"
        period="09/2019 - 04/2020"
        description={
          [
            '➔ Migration from AngularJS to React in the main application, in collaboration with the engineering team.',
            '➔ Created a React component library (Violin), which became open-source and enhanced development productivity for other developers.'
          ]
        }
        technologies={['React', 'AngularJS', 'JavaScript', 'SASS']}
      />

      <TimelineSeparator year="2019" />

      <ExperienceCard
        role="Front-End Teacher"
        company="Imagine School"
        period="01/2018 - 05/2019"
        description={
          [
            '➔ Taught programming to people of all ages who were having their first contact with the field.',
            '➔ Redefined the course curriculum, incorporating modern technologies such as JavaScript ES6, React, React Native, as well as Photoshop, HTML5, CSS3, Responsive Design, and other useful tools.'
          ]
        }
        technologies={['UI Design', 'Front-end development', 'Mobile development']}
      />

      <TimelineSeparator />

      <ExperienceCard
        role="Front-End Developer"
        company="Aurum"
        period="02/2017 - 08/2019"
        description={
          [
            '➔ Lead Front-end Developer, responsible for a legal software (SaaS), maintaining and developing new features.',
            '➔ Redesigned the main UI and styles of the application components.',
            '➔ Faced challenges in implementing responsive design throughout the application.',
            '➔ Defined an approach to migrate from AngularJS to React without interrupting the implementation of new features in the application.',
            '➔ Created a CSS library (Nix) to assist developers in utilizing framework styles with predefined classes.',
            '➔ Developed a React component library (Nectar) for internal use, making the development process more productive.'
          ]
        }
        technologies={['Javascript', 'AngularJS', 'React', 'UI Design', 'Figma', 'SASS']}
      />

      <TimelineSeparator year="2017" />

      <ExperienceCard
        role="Web Designer & Web Developer"
        company="BDDB"
        period="01/2010 - 06/2015"
        description={
          [
            '➔ Created graphic materials such as logos, visual identities, and stationery.',
            '➔ Developed and maintained various types of websites, from layout design in Photoshop to coding with WordPress.'
          ]
        }
        technologies={['Adobe Photoshop', 'Adobe Illustrator', 'WordPress', 'PHP', 'MySQL', 'JavaScript', 'JQuery']}
      />

      <TimelineSeparator year="2010" end />

      {!isCollapsed ? (
        <div className='absolute bottom-0 left-0 flex items-end justify-center w-full h-[200px] bg-gradient-to-b from-slate-900/0 to-slate-900'>
          <button className='mb-4 bg-white/10 rounded-full py-[2px] px-3 text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:bg-white/20 transition-all hover:text-slate-200' onClick={() => setIsCollapsed(true)}>Show more</button>
        </div>
      ) : (
        <div className='text-center'>
          <button 
            className='mb-4 bg-white/10 rounded-full py-[2px] px-3 text-[10px] uppercase font-bold tracking-widest text-slate-400 hover:bg-white/20 transition-all hover:text-slate-200' 
            onClick={() => {
              setIsCollapsed(false)
              sectionRef.current?.scrollIntoView()
            }}
          >Show less</button>
        </div>
      )}
    </section>
  )
}

export default Experiences