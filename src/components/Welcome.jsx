import { Search, Wind, Droplets, Thermometer } from 'lucide-react'

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center px-4">

      {/* Big animated emoji */}
      <div className="text-8xl mb-6 animate-bounce">
        🌤️
      </div>

      <h2 className="text-3xl font-bold text-slate-700 dark:text-slate-200 mb-3">
        Your Weather, Instantly
      </h2>

      <p className="text-slate-400 dark:text-slate-500 max-w-sm text-sm leading-relaxed mb-10">
        Search any city in the world to get real-time weather conditions and a 7-day forecast.
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { icon: <Thermometer className="w-4 h-4" />, label: 'Real-time Temperature' },
          { icon: <Wind className="w-4 h-4" />,        label: 'Wind Speed & Direction' },
          { icon: <Droplets className="w-4 h-4" />,    label: 'Humidity & Rain Chance' },
          { icon: <Search className="w-4 h-4" />,      label: 'Search Any City' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm shadow-sm"
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Welcome