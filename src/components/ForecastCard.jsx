import { getWeatherInfo } from '../utils/weatherHelpers'
import { Droplets } from 'lucide-react'

function ForecastCard({ day, isToday }) {
  const info = getWeatherInfo(day.weatherCode, true)

  const dateLabel = isToday
    ? 'Today'
    : new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })

  const dateNumber = new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })

  return (
    <div className={`
      flex flex-col items-center gap-2 p-4 rounded-2xl
      bg-white dark:bg-slate-800
      border border-slate-200 dark:border-slate-700
      shadow-sm hover:shadow-md
      transition-all duration-300 hover:-translate-y-1
      ${isToday ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''}
    `}>

      {/* Day name */}
      <span className={`text-sm font-semibold ${isToday ? 'text-blue-500 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
        {dateLabel}
      </span>

      {/* Date number */}
      <span className="text-xs text-slate-400 dark:text-slate-500">
        {dateNumber}
      </span>

      {/* Emoji */}
      <span className="text-3xl my-1">{info.emoji}</span>

      {/* Label */}
      <span className="text-xs text-slate-500 dark:text-slate-400 text-center leading-tight">
        {info.label}
      </span>

      {/* Max / Min temp */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm font-bold text-slate-800 dark:text-white">
          {day.maxTemp}°
        </span>
        <span className="text-sm text-slate-400 dark:text-slate-500">
          {day.minTemp}°
        </span>
      </div>

      {/* Precipitation */}
      <div className="flex items-center gap-1 text-blue-400 dark:text-blue-500">
        <Droplets className="w-3 h-3" />
        <span className="text-xs">{day.precipitation}%</span>
      </div>

    </div>
  )
}

export default ForecastCard