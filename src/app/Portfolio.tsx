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
          tags={['UI/UX', 'Next.js', 'Tailwind', 'WordPress', 'E-commerce']}
        />

        <CardProject
          href="https://www.mobfood.com.br/barbarohamburgueria"
          image="/mobfood.jpg"
          title="Delivery web app"
          tags={['UI/UX', 'Next.js', 'Tailwind', 'REST API']}
        />

        <CardProject
          href="https://peruffo.vercel.app/"
          image="/peruffo.jpg"
          title="Landing page"
          tags={['UI/UX', 'Next.js', 'Tailwind']}
        />

        <CardProject
          href="https://santosberco.com.br/"
          image="/santosberco.jpg"
          title="Web site"
          tags={['UI/UX', 'Next.js', 'Styled Components', 'Wordpress', 'REST API']}
        />

        <CardProject
          href="https://piccped.herokuapp.com/"
          image="/piccped.jpg"
          title="PWA"
          tags={['UI/UX', 'Preact', 'Progressive Web App']}
        />

        <CardProject
          href="https://pokedexdev.vercel.app/"
          image="/pokedex.jpg"
          title="Pokédex"
          tags={['UI/UX', 'React', 'Styled Components', 'Redux']}
        />
      </div>
    </section>
  )
}

export default Portfolio