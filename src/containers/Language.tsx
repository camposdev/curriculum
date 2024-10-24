const Language = () => {
  return (
    <div className="fixed z-10 top-3 right-3 bg-gray-900/80 border border-slate-700 shadow rounded-full flex items-center text-slate-300 overflow-hidden">
      <button className="py-2 px-3 text-xs bg-white/0 hover:bg-white/10">EN</button>
      <div className="text-slate-500 select-none absolute left-1/2 -translate-x-1/2">|</div>
      <button className="py-2 px-3 text-xs bg-white/0 hover:bg-white/10">PT</button>
    </div>
  )
}

export default Language