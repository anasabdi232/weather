import { getWeatherInfo, getWindDirection } from '../utils/weatherHelpers'
import { Droplets, Wind, Thermometer, MapPin } from 'lucide-react'

function CurrentWeather({ weather, location }) {
  const info = getWeatherInfo(weather.weatherCode, weather.isDay)

  return (
    <div className={`fade-in-up mt-8 rounded-3xl p-8 bg-gradient-to-br ${info.gradient} ${info.dark} text-white shadow-2xl`}>

      <div className="flex items-center gap-2 mb-6 opacity-90">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">
          {location.name}, {location.region && `${location.region},`} {location.country}
        </span>
      </div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <div className="text-8xl font-thin leading-none">
            {weather.temperature}°
          </div>
          <div className="text-xl font-medium mt-2 opacity-90">
            {info.label}
          </div>
          <div className="text-sm opacity-75 mt-1">
            Feels like {weather.feelsLike}°C
          </div>
        </div>
        <div className="text-8xl select-none">
          {info.emoji}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
        <div className="flex flex-col items-center gap-1">
          <Droplets className="w-5 h-5 opacity-80" />
          <span className="text-lg font-semibold">{weather.humidity}%</span>
          <span className="text-xs opacity-70">Humidity</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Wind className="w-5 h-5 opacity-80" />
          <span className="text-lg font-semibold">{weather.windSpeed} km/h</span>
          <span className="text-xs opacity-70">Wind {getWindDirection(weather.windDirection)}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Thermometer className="w-5 h-5 opacity-80" />
          <span className="text-lg font-semibold">{weather.feelsLike}°C</span>
          <span className="text-xs opacity-70">Feels Like</span>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather