import ForecastCard from './ForecastCard'

function Forecast({ forecast }) {
  return (
    <div className="fade-in-up-delay mt-6">
      <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-7 gap-3">
        {forecast.map((day, index) => (
          <ForecastCard
            key={day.date}
            day={day}
            isToday={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default Forecast