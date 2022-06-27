function getCurrentWeather(data) {
  return {
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    weather: {
      id: data.weather[0].id,
      description: data.weather[0].description,
    },
    wind: { speed: data.wind.speed, deg: data.wind.deg },
  };
}

export default getCurrentWeather;
