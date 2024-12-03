const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 8080;

// Serve static files (frontend)
app.use(express.static("."));

// Weather API route
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(weatherUrl);
    const { weather, main } = response.data;
    res.json({
      weather: weather[0].description,
      temp: main.temp,
    });
  } catch (error) {
    res.json({ error: "City not found or API error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
