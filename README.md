# WeatherApp

A sleek and responsive **Weather App** built with **React** and **Vite**.  
Displays current weather information for any city in a clean UI.

---

##  Live Demo

Check out the live version here: [Live Demo](#)  
*(https://checkweat.netlify.app/)*

---

##  Key Features

-  Search by city name to view current weather.
-  Displays temperature, weather description, humidity, wind speed, etc.
-  Responsive UI with clean layout.
-  Fast performance using Vite bundler.

---

##  Tech Stack

- **React** — Front-end UI.
- **Vite** — Development/Build tool.
- **API** — OpenWeatherMap API (or any other) for fetching weather data.
- **Styling** — CSS (or Tailwind if used).
- **Optional**: Firebase for storing search history or user preferences.

---

##  Project Structure

weatherapp/
├── public/
│ └── index.html
├── src/
│ ├── components/ # Reusable UI components (SearchBar, WeatherCard)
│ ├── pages/ # Page structure (if any)
│ ├── App.jsx # Root application component
│ ├── main.jsx # Vite entry file
│ └── styles.css # Global styles
├── package.json
├── vite.config.js
└── README.md

yaml
Copy code

---

##  Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/ChouhanAkash/weatherapp.git
   cd weatherapp
Install dependencies:

bash
Copy code
npm install
Configure the Weather API:

Sign up for an API key from OpenWeatherMap.

Create a .env file in the root folder with:

ini
Copy code
VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
Run the app locally:

bash
Copy code
npm run dev

### Demo Link 
https://checkweat.netlify.app/
