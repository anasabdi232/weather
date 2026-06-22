import { useState } from 'react'
import { Search } from 'lucide-react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '') return
    onSearch(query.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-5 py-3 pl-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition-all duration-300 placeholder:text-slate-400"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      </div>
    </form>
  )
}

export default SearchBar