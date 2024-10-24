import Image from "next/image"
import Link from "next/link"
import { GrTechnology } from "react-icons/gr"
import { LuExternalLink } from "react-icons/lu"

type Props = {
	href: string
	image: string
	title: string
  year: string
	tags: string[]
  small?: boolean
}

export const CardProject = ({ href, image, title, tags, small, year }: Props) => {
  return (
    <article>
      <Link href={href} target="_blank" className="card-project">
        <header className={`overflow-hidden rounded-lg p-[1px] ${!small && 'bg-gradient-to-br from-slate-400 via-slate-900 to-slate-600 shadow-md'}`}>
          <div className="relative overflow-hidden">
            <Image
              src={image}
              width={600}
              height={370}
              alt={title}
              className={`rounded-lg border border-slate-800 w-full ${!!small && 'is-small'}`}
            />
            <div className="icon-link absolute  w-[80px] h-[80px] flex justify-center items-center text-slate-200 text-3xl transition-all cursor-pointer right-0 top-0">
              <div className="bg-slate-900/60 blur-md absolute w-full h-full inset-0 rounded-full -z-10"></div>
              <LuExternalLink className="text-xl" />
            </div>
          </div>
        </header>
      </Link>

      <h4 className="uppercase text-xs tracking-widest my-2 flex justify-between">
        {title}
        <span className="font-syne text-xs italic text-slate-400 bg-slate-800 rounded-full px-2">{year}</span>
      </h4>

      <footer className="text-xs text-slate-400">
        <GrTechnology className="inline text-base mr-1" /> {tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
      </footer>
    </article>
  )
}
