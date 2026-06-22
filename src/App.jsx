import { useState } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Welcome from './components/Welcome'
import SkeletonLoader from './components/SkeletonLoader'
import { getCoordinates, getCurrentWeather, getForecast } from './services/weatherApi'

function App() {
  const [isDark, setIsDark] = useDarkMode()
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (cityName) => {
    setLoading(true)
    setError(null)
    setWeather(null)
    setLocation(null)
    setForecast(null)
    setHasSearched(true)

    try {
      const coords = await getCoordinates(cityName)
      setLocation(coords)

      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(coords.latitude, coords.longitude),
        getForecast(coords.latitude, coords.longitude),
      ])

      setWeather(weatherData)
      setForecast(forecastData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="max-w-5xl mx-auto px-6 pb-12">
        <SearchBar onSearch={handleSearch} />

        {/* Welcome screen — only before first search */}
        {!hasSearched && <Welcome />}

        {/* Skeleton loader */}
        {loading && <SkeletonLoader />}

        {/* Error message */}
        {error && !loading && (
          <div className="fade-in-up mt-6 text-center bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-6">
            <p className="text-4xl mb-3">🌧️</p>
            <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
            <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">
              Try checking the city name and searching again.
            </p>
          </div>
        )}

        {/* Weather results */}
        {weather && location && forecast && !loading && (
          <div>
            <CurrentWeather weather={weather} location={location} />
            <Forecast forecast={forecast} />
          </div>
        )}
      </main>
    </div>
  )
}

export default App