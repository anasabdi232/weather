# 🌤️ WeatherDash

A professional weather dashboard built with React and Tailwind CSS. Search any city in the world and get real-time weather conditions plus a 7-day forecast — all powered by the free Open-Meteo API with no API key required.

---

## 🚀 Live Features

- 🔍 **City Search** — Search any city worldwide using the Open-Meteo Geocoding API
- 🌡️ **Current Weather** — Real-time temperature, feels like, humidity, and wind speed
- 📅 **7-Day Forecast** — Daily high/low temperatures, weather conditions, and rain probability
- 🎨 **Dynamic Themes** — Weather card gradient changes color based on actual conditions
- 🌙 **Dark Mode** — Smooth dark/light toggle with localStorage persistence
- 💀 **Skeleton Loader** — Professional animated placeholder while data loads
- 🏠 **Welcome Screen** — Beautiful landing state before any search
- ⚠️ **Error Handling** — Clean error messages for invalid cities or network issues
- 📱 **Responsive Design** — Works on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI component library |
| Vite | Build tool and dev server |
| Tailwind CSS v4 | Utility-first styling |
| Lucide React | Icon library |
| Open-Meteo API | Free weather data (no key needed) |

---

## 📡 APIs Used

### 1. Geocoding API
```
https://geocoding-api.open-meteo.com/v1/search
```
Converts a city name into latitude and longitude coordinates.

### 2. Weather Forecast API
```
https://api.open-meteo.com/v1/forecast
```
Returns current weather and 7-day forecast using coordinates.

> Both APIs are completely free with no API key or account required.

---

## 📁 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.jsx   # Main weather card with gradient
│   │   ├── Forecast.jsx         # 7-day forecast container
│   │   ├── ForecastCard.jsx     # Individual day card
│   │   ├── Header.jsx           # Logo and dark mode toggle
│   │   ├── SearchBar.jsx        # City search input
│   │   ├── SkeletonLoader.jsx   # Animated loading placeholder
│   │   └── Welcome.jsx          # Initial landing screen
│   ├── hooks/
│   │   └── useDarkMode.js       # Dark mode state and persistence
│   ├── services/
│   │   └── weatherApi.js        # All API call functions
│   ├── utils/
│   │   └── weatherHelpers.js    # Weather code to label/emoji/color mapping
│   ├── App.jsx                  # Root component and state management
│   └── index.css                # Global styles and animations
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/anasabdi232/weather-dashboard.git
cd weather-dashboard
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open your browser**
```
http://localhost:5173
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## 🧠 How It Works

```
User types a city name
        ↓
SearchBar calls handleSearch() in App.jsx
        ↓
getCoordinates() calls Geocoding API
Returns latitude and longitude
        ↓
getCurrentWeather() and getForecast()
both call Weather API simultaneously
        ↓
Data saved into React state
        ↓
CurrentWeather and Forecast components
render the results with animations
```

---

## 🎨 Weather Conditions Supported

| Code | Condition | Card Color |
|---|---|---|
| 0 | Clear Sky | Amber → Orange |
| 1 | Mainly Clear | Amber → Sky |
| 2 | Partly Cloudy | Sky → Slate |
| 3 | Overcast | Slate → Slate |
| 45-48 | Foggy | Slate → Slate |
| 51 | Light Drizzle | Sky → Blue |
| 61-65 | Rain (Light to Heavy) | Blue → Purple |
| 71 | Light Snow | Sky → Blue |
| 80 | Rain Showers | Blue → Cyan |
| 95 | Thunderstorm | Purple → Slate |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  }
}
```

---

## 👨‍💻 Author

**Anas Abdi**
- GitHub: [@anasabdi232](https://github.com/anasabdi232)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Open-Meteo](https://open-meteo.com/) for the free weather API
- [Lucide](https://lucide.dev/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
