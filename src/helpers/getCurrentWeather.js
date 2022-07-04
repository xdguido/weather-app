function getCurrentWeather(data) {
  return {
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weather: {
      id: data.weather[0].id,
      description: data.weather[0].description,
    },
    wind: { speed: Math.round(data.wind.speed), deg: data.wind.deg },
  };
}

export default getCurrentWeather;
