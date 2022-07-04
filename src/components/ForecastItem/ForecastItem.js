import { Container, Col, Row } from "react-bootstrap";

function ForecastItem({ forecast }) {
  return (
    <div>
      {forecast.map((item) => (
        <Row key={forecast.indexOf(item)}>
          <div>{item.hour}</div>
          <div>{item.main.temp}</div>
          <div>{item.main.feels_like}</div>
        </Row>
      ))}
    </div>
  );
}

export default ForecastItem;
