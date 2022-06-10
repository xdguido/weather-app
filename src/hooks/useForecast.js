import { useState } from "react";
import getCurrentDay from "../helpers/getCurrentDayForecast";
import getCurrentDayDetails from "../helpers/getCurrentDayDetails";
// import getUpcomingDays from "../helpers/getUpcomingDaysForecast";

const KEYS = process.env.REACT_APP_NOT_SECRET_CODE;

function useForecast() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  async function submitRequest(city) {
    setLoading(true);
    setError(false);
    const forecastData = await getForecastData(city);
    const weatherData = await getWeatherData(city);
    console.log(weatherData, forecastData);
    // gatherForecastData(forecastData);
    // gatherWeatherData(weatherData);
  }

  // function gatherForecastData(data) {
  //   const upcomingDays = getUpcomingDays(data);
  //   setForecast({ ...forecast, upcomingDays });
  // }

  // function gatherWeatherData(data) {
  //   const currentDay = getCurrentDay(data);
  //   const currentDayDetails = getCurrentDayDetails(data);
  //   setForecast({ ...forecast, currentDay, currentDayDetails });
  // }

  async function getForecastData(city) {
    const res = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=" +
        KEYS +
        "&units=metric"
    );
    const data = await res.json();

    if (data.cod === "404") {
      setError("City not found");
      return;
    }
    return data;
  }

  async function getWeatherData(city) {
    const coords = await getCoordsData(city);
    console.log(coords);
    const lat = coords[0].lat;
    const lon = coords[0].lon;

    const res = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        KEYS +
        "&units=metric"
    );
    const data = await res.json();

    if (coords.lenght === 0 || data.cod === "404") {
      setError("City not found");
      return;
    }
    return data;
  }

  async function getCoordsData(city) {
    const res = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&appid=" +
        KEYS
    );
    const data = await res.json();

    if (data.cod === "404") {
      setError("City not found");
      return;
    }
    return data;
  }

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
}

export default useForecast;
