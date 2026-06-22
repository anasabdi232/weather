const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

export async function getCoordinates(cityName) {
  const response = await fetch(`${GEO_URL}?name=${encodeURIComponent(cityName)}&count=1`)

  if (!response.ok) throw new Error('Failed to fetch city data')

  const data = await response.json()

  if (!data.results || data.results.length === 0) throw new Error('City not found')

  const { latitude, longitude, name, country, admin1 } = data.results[0]

  return { latitude, longitude, name, country, region: admin1 || '' }
}

export async function getCurrentWeather(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'weather_code',
      'wind_speed_10m',
      'wind_direction_10m',
      'is_day',
    ].join(','),
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    timezone: 'auto',
  })

  const response = await fetch(`${WEATHER_URL}?${params}`)

  if (!response.ok) throw new Error('Failed to fetch weather data')

  const data = await response.json()
  const c = data.current

  return {
    temperature: Math.round(c.temperature_2m),
    feelsLike: Math.round(c.apparent_temperature),
    humidity: c.relative_humidity_2m,
    windSpeed: Math.round(c.wind_speed_10m),
    windDirection: c.wind_direction_10m,
    weatherCode: c.weather_code,
    isDay: c.is_day,
    timezone: data.timezone,
  }
}

export async function getForecast(latitude, longitude) {
  const params = new URLSearchParams({
    latitude,
    longitude,
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_probability_max',
    ].join(','),
    temperature_unit: 'celsius',
    timezone: 'auto',
    forecast_days: 7,
  })

  const response = await fetch(`${WEATHER_URL}?${params}`)

  if (!response.ok) throw new Error('Failed to fetch forecast data')

  const data = await response.json()
  const d = data.daily

  return d.time.map((date, i) => ({
    date,
    weatherCode: d.weather_code[i],
    maxTemp: Math.round(d.temperature_2m_max[i]),
    minTemp: Math.round(d.temperature_2m_min[i]),
    precipitation: d.precipitation_probability_max[i],
  }))
}