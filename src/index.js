import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons2/css/weather-icons.min.css";
import "weather-icons2/css/weather-icons-wind.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
