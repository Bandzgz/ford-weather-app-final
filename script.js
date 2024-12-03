document.getElementById("checkWeather").addEventListener("click", async () => {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");
  
    if (!city) {
      resultDiv.innerHTML = "Please enter a city name.";
      return;
    }
  
    try {
      const response = await fetch(`/weather?city=${city}`);
      const data = await response.json();
  
      if (data.error) {
        resultDiv.innerHTML = `Error: ${data.error}`;
      } else {
        resultDiv.innerHTML = `The weather in ${city} is ${data.weather}. Temperature: ${data.temp}°C.`;
      }
    } catch (error) {
      resultDiv.innerHTML = "Something went wrong. Please try again later.";
    }
  });
  