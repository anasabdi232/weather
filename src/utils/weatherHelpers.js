export function getWeatherInfo(code, isDay) {
  const w = {
    0:  { label: 'Clear Sky',      emoji: isDay ? '☀️' : '🌙', gradient: 'from-amber-400 to-orange-500',   dark: 'dark:from-amber-600 dark:to-orange-700'  },
    1:  { label: 'Mainly Clear',   emoji: isDay ? '🌤️' : '🌙', gradient: 'from-amber-300 to-sky-400',      dark: 'dark:from-amber-500 dark:to-sky-600'     },
    2:  { label: 'Partly Cloudy',  emoji: '⛅',                  gradient: 'from-sky-300 to-slate-400',     dark: 'dark:from-sky-500 dark:to-slate-600'     },
    3:  { label: 'Overcast',       emoji: '☁️',                  gradient: 'from-slate-400 to-slate-500',   dark: 'dark:from-slate-600 dark:to-slate-700'   },
    45: { label: 'Foggy',          emoji: '🌫️',                  gradient: 'from-slate-300 to-slate-400',   dark: 'dark:from-slate-500 dark:to-slate-600'   },
    48: { label: 'Icy Fog',        emoji: '🌫️',                  gradient: 'from-slate-300 to-blue-300',    dark: 'dark:from-slate-500 dark:to-blue-600'    },
    51: { label: 'Light Drizzle',  emoji: '🌦️',                  gradient: 'from-sky-300 to-blue-400',      dark: 'dark:from-sky-500 dark:to-blue-600'      },
    61: { label: 'Light Rain',     emoji: '🌧️',                  gradient: 'from-blue-400 to-blue-500',     dark: 'dark:from-blue-600 dark:to-blue-700'     },
    63: { label: 'Moderate Rain',  emoji: '🌧️',                  gradient: 'from-blue-500 to-indigo-500',   dark: 'dark:from-blue-700 dark:to-indigo-700'   },
    65: { label: 'Heavy Rain',     emoji: '⛈️',                  gradient: 'from-indigo-500 to-purple-600', dark: 'dark:from-indigo-700 dark:to-purple-800' },
    71: { label: 'Light Snow',     emoji: '🌨️',                  gradient: 'from-sky-200 to-blue-300',      dark: 'dark:from-sky-400 dark:to-blue-500'      },
    80: { label: 'Rain Showers',   emoji: '🌦️',                  gradient: 'from-blue-400 to-cyan-500',     dark: 'dark:from-blue-600 dark:to-cyan-700'     },
    95: { label: 'Thunderstorm',   emoji: '⛈️',                  gradient: 'from-purple-600 to-slate-700',  dark: 'dark:from-purple-800 dark:to-slate-800'  },
  }

  return w[code] ?? { label: 'Unknown', emoji: '🌡️', gradient: 'from-sky-400 to-blue-500', dark: 'dark:from-sky-600 dark:to-blue-700' }
}

export function getWindDirection(degrees) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(degrees / 45) % 8]
}