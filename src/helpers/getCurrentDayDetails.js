function getCurrentDayDetails(data) {
  return {
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind: { speed: data.wind.speed, deg: data.wind.deg },
  };
}

export default getCurrentDayDetails;
