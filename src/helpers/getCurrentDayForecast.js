function getCurrentDayForecast(data) {
  return {
    temp: data.main.temp,
    feels_like: data.main.feels_like,
    weather: { description: data.weather[0].description },
  };
}

export default getCurrentDayForecast;
