import useForecast from "./hooks/useForecast";

import { Container, Col, Row } from "react-bootstrap";

import SearchForm from "./components/SearchForm";
import Error from "./components/Error";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  function onSubmit(value) {
    submitRequest(value);
  }

  return (
    <div className="App">
      <Container>
        <SearchForm submitSearch={onSubmit} isLoading={isLoading} />
        {isError && <Error message={isError} />}
        {forecast && <Weather {...forecast.currentWeather} />}
        {forecast && <Forecast forecast={forecast.futureWeather} />}
      </Container>
    </div>
  );
}

export default App;
