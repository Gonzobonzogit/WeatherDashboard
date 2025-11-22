# 06 Server-Side APIs: Weather Dashboard 🌦️

Build a Weather Dashboard that lets users search any city and instantly see both current conditions and a 5-day forecast — powered by the OpenWeather APIs.

You will practice:

- Working with server-side APIs
- Using multiple API calls (geocoding and forecast)
- Dynamically updating the DOM with JavaScript
- Saving/searching history using localStorage

---

## OVERVIEW

You will use the OpenWeather "5 Day / 3 Hour Forecast" endpoint:

https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

The forecast endpoint requires latitude and longitude.  
This means you must first turn a city name into coordinates using a Geocoding API, then use those coordinates to get weather data.

Note: After registering for a new API key, you may need to wait up to 2 hours before it becomes active.

For guidance on API keys, see the Full-Stack Blog:
https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys

---

## USER STORY

AS A traveler  
I WANT to see the weather outlook for multiple cities  
SO THAT I can plan a trip accordingly

---

## ACCEPTANCE CRITERIA

GIVEN a weather dashboard with form inputs

WHEN I search for a city  
THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city  
THEN I see the city name, date, weather icon, temperature, humidity, and wind speed

WHEN I view future weather conditions for that city  
THEN I see a 5-day forecast including date, icon, temperature, wind speed, and humidity

WHEN I click on a city in the search history  
THEN I am again presented with current and future conditions for that city

---

## SUGGESTED TECHNICAL FLOW

1. User types a city name into a search field.
2. Use a Geocoding API to convert that city name → latitude and longitude.
3. Use the coordinates to call the OpenWeather Forecast API.
4. Display the “current weather” block.
5. Display the “5-day forecast” using one entry per day (e.g., the noon entry).
6. Save each searched city into localStorage.
7. Render the saved cities as clickable history buttons.
8. Clicking a history city triggers the same API process again.

---

## MOCK-UP

The weather dashboard contains a search bar, a list of recent cities, and two sections displaying Atlanta’s current weather and a 5-day forecast.

![Weather App Demo](./Assets/06-server-side-apis-homework-demo.png)

---

## GRADING REQUIREMENTS

IMPORTANT: A submission marked “0” is incomplete and does not count towards graduation.

Examples of incomplete submissions:

- Empty repository
- Repository with only a title
- Repository with only a README
- Repository with unmodified starter code

---

## TECHNICAL CRITERIA (40%)

- Meets all acceptance criteria
- Uses OpenWeather API
- Uses localStorage for persistent history

---

## DEPLOYMENT (32%)

- Live deployed app URL is submitted
- App loads with no errors
- GitHub repo URL is submitted
- Repo contains full application code

---

## APPLICATION QUALITY (15%)

- Clean, intuitive user experience
- Visually polished interface
- Functionality matches mock-up

---

## REPOSITORY QUALITY (13%)

- Unique repo name
- Organized file structure
- Clean code: indentation, naming, comments
- Multiple descriptive commits
- Quality README with:
  - Description
  - Screenshot
  - Link to deployed app

---

## SUBMISSION REQUIREMENTS

You must submit BOTH of the following:

1. The live deployed application URL
2. The GitHub repository URL (with a complete README and unique repo name)

---
