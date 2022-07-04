import { Container, Col, Row, Accordion } from "react-bootstrap";
import ForecastItem from "../ForecastItem/ForecastItem";
import ForecastHeader from "../ForecastHeader/ForecastHeader";

function Forecast({ forecast }) {
  return (
    <div>
      <Accordion>
        {forecast.slice(1).map((item) => (
          <Accordion.Item
            key={forecast.indexOf(item)}
            eventKey={forecast.indexOf(item)}
          >
            <Accordion.Header>
              <ForecastHeader {...item[0]} />
            </Accordion.Header>
            <Accordion.Body>
              <ForecastItem forecast={item.slice(1)} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Forecast;
