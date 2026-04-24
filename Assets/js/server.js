import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express();


//Github Only
app.use(cors({ origin: 'https://gonzobonzogit.github.io/WeatherDashboard/' }));


app.get('/geocode', async(req, res) => {
    const { q } = req.query
    const url = `https://geocode.maps.co/search?q=${encodeURIAComponent(q)}&api_key=${process.env.GEO_KEY}`;

    const data = await fetch(url);
    const json = await data.json();
    res.json(json);
})


app.get('/weather', async(req, res) =>{
    const { city  } = req.query;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.OMW_KEY}`;
    const data = await fetch(url);
    const json = await data.json();
    res.json(json);
})

app.listen(process.env.PORT || 3000);
