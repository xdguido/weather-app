import { useState } from "react";
import getCurrentWeather from "../helpers/getCurrentWeather";
import { getDailyForecast } from "../helpers/getDailyForecast";

const KEYS = process.env.REACT_APP_NOT_SECRET_CODE;

function useForecast() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  async function submitRequest(city) {
    setLoading(true);
    setError(false);

    try {
      const forecastData = await getForecastData(city);
      const currentData = await getWeatherData(city);
      const futureWeather = getDailyForecast(forecastData);
      const currentWeather = getCurrentWeather(currentData);

      setForecast({ futureWeather, currentWeather });

      console.log(forecastData);
      console.log(currentData);
      // console.log(futureWeather);
      // console.log(currentWeather);
    } catch (err) {
      console.log(err);
      setError("City not found");
      setLoading(false);
    }
  }

  async function getForecastData(city) {
    const res = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=" +
        KEYS +
        "&units=metric"
    );
    const data = await res.json();

    if (data.length === 0 || data.cod === "404") {
      throw new Error("City not found");
    }

    return data;
  }

  async function getWeatherData(city) {
    const coords = await getCoordsData(city);

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
    const data = res.json();
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

    if (data.length === 0) {
      throw new Error("Error: No coords found");
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
