import "./App.css";
import useForecast from "./hooks/useForecast";
import Form from "./components/Form";
import Error from "./components/Error";
import Weather from "./components/Weather";

function App() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  function onSubmit(value) {
    submitRequest(value);
  }

  return (
    <div className="App">
      <Form submitSearch={onSubmit} />
      {isError && <Error message={isError} />}
      {forecast && <Weather {...forecast.currentWeather} />}
    </div>
  );
}

export default App;
