import { useState } from "react";

const KEYS = process.env.local.REACT_APP_NOT_SECRET_CODE;

function useForecast() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(false);

  async function submitRequest(city) {
    const res = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=1&appid=" +
        KEYS
    );
    const data = await res.json();
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
