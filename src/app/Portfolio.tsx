import { CardProject } from '@/components/CardProject'
import React from 'react'

const Portfolio = () => {
  return (
    <section className="mb-16">
      <h3 className="subtitle">Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardProject
          href="https://mobvarejo.simmobile.com.br/"
          image="/mobvarejo.jpg"
          title="Hotsite (e-commerce)"
          year="2024"
          tags={['UI/UX', 'Next.js', 'Tailwind', 'WordPress', 'E-commerce']}
        />

        <CardProject
          href="https://www.mobfood.com.br/barbarohamburgueria"
          image="/mobfood.jpg"
          title="Delivery web app"
          year="2024"
          tags={['UI/UX', 'Next.js', 'Tailwind', 'REST API']}
        />

        <CardProject
          href="https://peruffo.vercel.app/"
          image="/peruffo.jpg"
          title="Landing page"
          year="2023"
          tags={['UI/UX', 'Next.js', 'Tailwind']}
        />

        <CardProject
          href="https://pokedexdev.vercel.app/"
          image="/pokedex.jpg"
          title="Pokédex"
          year="2022"
          tags={['UI/UX', 'React', 'Styled Components', 'Redux']}
        />

        <CardProject
          href="https://santosberco.com.br/"
          image="/santosberco.jpg"
          title="Web site"
          year="2021"
          tags={['UI/UX', 'Next.js', 'Styled Components', 'Wordpress', 'REST API']}
        />

        <CardProject
          href="https://piccped.herokuapp.com/"
          image="/piccped.jpg"
          title="PWA"
          year="2019"
          tags={['UI/UX', 'Preact', 'Progressive Web App']}
        />

        <CardProject
          href="https://violin-ui.netlify.app/"
          image="/violin.png"
          title="Design System"
          year="2020"
          tags={['UI/UX', 'React', 'Styled Components']}
          small
        />

        <CardProject
          href="https://nectar-ui.netlify.app/#/"
          image="/nectar.png"
          title="Design System"
          year="2019"
          tags={['UI/UX', 'React', 'Styled Components']}
          small
        />

        <CardProject
          href="https://nix.aurum.com.br/"
          image="/nix.png"
          title="CSS Library"
          year="2018"
          tags={['UI/UX', 'SASS']}
          small
        />
      </div>
    </section>
  )
}

export default Portfolio