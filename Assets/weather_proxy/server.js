import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express();


//Github Only
app.use(cors({ origin: 'https://gonzobonzogit.github.io/WeatherDashboard/' }));

app.get('/weather', async(req, res) =>{
    const { city  } = req.query;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OWM_KEY}&units=imperial`;

    const data = await fetch(url);
    const json = await data.json();
    res.json(json);
})

app.listen(process.env.PORT || 3000);
