import { Container, Col, Row } from "react-bootstrap";

function ForecastHeader({
  day,
  max_temp,
  max_wind,
  min_temp,
  weather_id,
  weather_description,
}) {
  return (
    <div>
      <div>{day}</div>
    </div>
  );
}

export default ForecastHeader;
