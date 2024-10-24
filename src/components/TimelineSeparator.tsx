import React from 'react'

type TProps = {
  start?: boolean
  end?: boolean
  year?: string
}

const TimelineSeparator = ({ start = false, end = false, year }: TProps) => {
  return (
    <div className="flex flex-col items-center">
      {start ? (
        <div className="w-[2px] h-14 bg-gradient-to-b from-slate-700/0 via-slate-700 to-slate-700"></div>
      ) : (
        <div className="w-[2px] h-8 bg-slate-700"></div>
      )}

      {!!year && (
        <div className="w-16 h-16 p-[2px] rounded-full bg-gradient-to-br from-slate-400 via-slate-900 to-slate-600">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 w-full h-full flex flex-col items-center justify-center rounded-full font-dela text-sm text-slate-300">
            {year}
          </div>
        </div>
      )}

      {end ? (
        <div className="w-[2px] h-14 bg-gradient-to-t from-slate-700/0 via-slate-700 to-slate-700"></div>
      ) : !!year && <div className="w-[2px] h-8 bg-slate-700"></div>}
    </div>
  )
}

export default TimelineSeparator