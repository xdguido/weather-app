import { Container, Col, Row } from "react-bootstrap";

function Weather({ temp, weather, feels_like, humidity, pressure, wind }) {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <i className={`wi wi-owm-${weather.id}`}></i>
            <div>{weather.description}</div>
            <div>{temp} °C</div>
          </div>
        </Col>
        <Col>
          <div>
            <div>Feels like: {feels_like} °C</div>
            <div>Humidity: {humidity} %</div>
            <div>Pressure: {pressure} mb</div>
            <div>
              Wind: <i className={`wi wi-wind from-${wind.deg}-deg`}></i>
              {wind.speed} KM/h
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Weather;
