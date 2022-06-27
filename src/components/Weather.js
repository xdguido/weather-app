function Weather({ temp, feels_like, humidity, pressure }) {
  return (
    <div>
      <div>
        temperature: <span>{temp}</span>
      </div>
      <div>
        <span>feels like: {feels_like}</span>
      </div>
      <div>
        humidity: <span>{humidity}</span>
      </div>
      <div>
        pressure: <span>{pressure}</span>
      </div>
    </div>
  );
}

export default Weather;
