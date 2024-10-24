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
            <div className="icon-link absolute top-1/2 left-1/2 w-[80px] h-[80px] rounded-full bg-slate-900/80 flex justify-center items-center text-slate-200 text-3xl transition-all cursor-pointer -translate-x-1/2 -translate-y-1/2">
              <LuExternalLink />
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
