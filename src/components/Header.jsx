import { Sun, Moon, CloudSun } from 'lucide-react'

function Header({ isDark, setIsDark }) {
  return (
    <header className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <CloudSun className="w-7 h-7 text-blue-500 dark:text-blue-400" />
        <h1 className="text-xl font-bold tracking-tight">
          Weather<span className="text-blue-500 dark:text-blue-400">Dash</span>
        </h1>
      </div>


      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700" />
        )}
      </button>
    </header>
  )
}

export default Header