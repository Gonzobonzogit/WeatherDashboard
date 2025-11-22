# Weather Forecast Application 🌦️

A fully-featured, responsive weather dashboard that provides current weather conditions and a 5-day forecast for any city worldwide. Built with vanilla JavaScript, HTML, and CSS featuring geolocation support, temperature unit conversion, and a modern animated UI.

![Weather Dashboard](./Assets/screenshots/demo.png)

## Features

### Core Functionality
- 🌤️ **Current Weather Display** - Real-time weather conditions including temperature, humidity, and wind speed
- 📅 **5-Day Forecast** - Extended weather predictions with detailed daily breakdowns
- 🔍 **Smart City Search** - Search weather information by city name with geocoding integration
- 📍 **Geolocation Support** - Automatically detect and display weather for your current location
- 🌡️ **Temperature Unit Toggle** - Switch seamlessly between Fahrenheit and Celsius
- 💾 **Search History** - Automatically saves your 8 most recent searches with one-click access
- ⚠️ **Custom Error Handling** - User-friendly error messages with animated styling

### Design & UX
- 🎨 **Modern UI** - Clean, polished interface with gradient backgrounds
- 🎬 **Animated Elements** - Smooth transitions and interactive feedback
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🖼️ **Custom Graphics** - Curated anime-style graphics and weather-themed GIFs

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with Flexbox, Grid, animations, and gradients
- **JavaScript (ES6+)** - Vanilla JavaScript with modern async/await patterns
- **OpenWeatherMap API** - Comprehensive weather data provider
- **Geocode Maps API** - Accurate location geocoding service
- **Local Storage API** - Client-side data persistence for preferences and history

## Quick Start

### Prerequisites

You'll need free API keys from:
1. **OpenWeatherMap** - [Get your API key](https://openweathermap.org/api)
2. **Geocode Maps** - [Get your API key](https://geocode.maps.co/)

Both services offer generous free tiers perfect for this application.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/WeatherAPI-app.git
   cd WeatherAPI-app
   ```

2. **Set up your API keys:**
   ```bash
   cp Assets/js/config.example.js Assets/js/config.js
   ```

3. **Add your API keys to `Assets/js/config.js`:**
   ```javascript
   const API_KEY = 'your-openweathermap-api-key-here';
   const GEO_KEY = 'your-geocode-maps-api-key-here';
   ```

4. **Launch the application:**

   Open `index.html` directly in your browser, or use a local server:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

5. **Open in browser:**

   Navigate to `http://localhost:8000`

## How to Use

1. **Search by City Name**
   - Enter any city name in the search bar
   - Click "Search" or press Enter
   - View current weather and 5-day forecast instantly

2. **Use Your Location**
   - Click the "📍 Use My Location" button
   - Grant location permission when prompted
   - See weather for your current coordinates

3. **Switch Temperature Units**
   - Click "Switch to °C" or "Switch to °F" to toggle
   - Your preference is saved automatically
   - All temperatures update immediately

4. **Access Search History**
   - Previously searched cities appear as clickable buttons
   - Click any city to quickly reload its weather
   - Use "Clear History" to reset your saved searches

## Project Structure

```
WeatherAPI-app/
├── Assets/
│   ├── css/
│   │   └── styles.css              # All application styles
│   ├── images/
│   │   ├── chibi-pointing.png      # Decorative pointing character
│   │   ├── wo-weather.gif          # Sidebar weather animation
│   │   ├── pudgy-raining.gif       # Sidebar rain animation
│   │   ├── yep-anime.gif           # Sidebar character animation
│   │   ├── (panic).jpg             # Error message graphic
│   │   └── Gonzo-codes-logo.svg    # Footer logo
│   ├── js/
│   │   ├── config.example.js       # API key template (tracked)
│   │   ├── config.js               # Your API keys (gitignored)
│   │   ├── follow-me.js            # Additional functionality
│   │   └── script.js               # Main application logic
│   └── Debugging/                  # Development screenshots
├── index.html                       # Main HTML file
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## API Information

### OpenWeatherMap API
- **Endpoint:** `https://api.openweathermap.org/data/2.5/forecast`
- **Free Tier:** 1,000 API calls/day, 60 calls/minute
- **Data:** 5-day forecast with 3-hour intervals
- **Documentation:** [OpenWeatherMap API Docs](https://openweathermap.org/api)

### Geocode Maps API
- **Endpoint:** `https://geocode.maps.co/search`
- **Free Tier:** Available with registration
- **Data:** City name to latitude/longitude conversion
- **Documentation:** [Geocode Maps Docs](https://geocode.maps.co/)

## Key Features Explained

### Temperature Unit Conversion
- Toggle between Fahrenheit and Celsius
- Preference saved to localStorage
- Instant conversion without re-fetching data
- Units persist across sessions

### Geolocation Integration
- Browser-native geolocation API
- Permission-based access
- Fallback error handling
- Automatic weather fetch on approval

### Smart Error Handling
- Input validation for city names
- Network error detection
- API response validation
- Custom error UI with animations
- Auto-dismissing error messages (5 seconds)

### Local Storage Features
- Search history (max 8 cities)
- Temperature unit preference
- Persistent across browser sessions
- Easy clear functionality

### Responsive Design
- Mobile-first CSS approach
- Breakpoint at 768px for tablets/phones
- Flexible grid layouts
- Touch-optimized buttons and inputs

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (not supported - requires modern ES6+ features)

## Development

### File Organization
- **HTML** - Semantic structure with accessibility in mind
- **CSS** - Organized by component with clear sections
- **JavaScript** - Modular functions with clear separation of concerns

### Code Style
- ES6+ modern JavaScript
- Template literals for dynamic content
- Async/await for API calls
- Clear function naming and comments

## Security Notes

- API keys are stored in a separate `config.js` file
- `config.js` is gitignored to prevent accidental commits
- `config.example.js` provides a template for users
- Never commit actual API keys to version control

## Known Issues

None at this time. If you encounter any bugs, please open an issue on GitHub.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/WeatherAPI-app/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Geocoding by [Geocode Maps](https://geocode.maps.co/)
- Anime graphics sourced from various artists
- Built as part of a web development bootcamp project

## Author

**Gonzo Codes**

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ and lots of ☕ using HTML, CSS, JavaScript & OpenWeatherMap

© 2025 Gonzo Codes. All rights reserved.
