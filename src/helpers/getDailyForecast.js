import moment from "moment";

function getDailyForecast(data) {
  let forecast = [];
  let lastDay = "";

  const info = { city: data.city.name, country: data.city.country };
  forecast.push(info);

  data.list.forEach((item) => {
    const day = getDayFormat(item.dt_txt);
    const hour = getHourFormat(item.dt_txt);
    const hourlyForecast = {
      day: day,
      hour: hour,
      main: {
        temp: Math.round(item.main.temp),
        feels_like: Math.round(item.main.feels_like),
        humidity: item.main.humidity,
      },
      wind: {
        speed: Math.round(item.wind.speed),
        deg: item.wind.deg,
        gust: Math.round(item.wind.gust),
      },
      weather: {
        id: item.weather[0].id,
        description: item.weather[0].description,
      },
    };

    if (day !== lastDay) {
      lastDay = day;

      let generalForecast = {
        day: day,
        max_temp: hourlyForecast.main.feels_like,
        min_temp: hourlyForecast.main.feels_like,
        max_wind: hourlyForecast.wind.speed,
        weather_id: hourlyForecast.weather.id,
        weather_description: hourlyForecast.weather.description,
      };

      let newDay = [generalForecast, hourlyForecast];
      forecast.push(newDay);
    } else if (day === lastDay) {
      let s = forecast.slice(-1)[0];

      //get generalForecast
      let f = s[0];

      if (hourlyForecast.main.feels_like > f.max_temp) {
        f["max_temp"] = hourlyForecast.main.feels_like;
        f["weather_id"] = hourlyForecast.weather.id;
        f["weather_description"] = hourlyForecast.weather.description;
      }
      if (hourlyForecast.main.feels_like < f.min_temp) {
        f["min_temp"] = hourlyForecast.main.feels_like;
      }
      if (hourlyForecast.wind.speed > f.max_wind) {
        f["max_wind"] = hourlyForecast.wind.speed;
      }

      s.push(hourlyForecast);

      // //get last item from forecast array
      // const s = forecast.slice(-1)[0];
      // //add new forecast and merge with last forecast item
      // let m = {};
      // m[hour] = hourlyForecast;
      // const newItem = { ...s, ...m };
      // //replace last forecast item with new item
      // const index = forecast.indexOf(s);
      // if (index !== -1) {
      //   forecast[index] = newItem;
      // }
    }
  });
  return forecast;
}

function getDayFormat(data) {
  let m = moment(data, "YYYY-MM-DD HH:mm:ss");
  return m.toString().substring(0, 3);
}
function getHourFormat(data) {
  let m = moment(data, "YYYY-MM-DD HH:mm:ss");
  return m.toString().substring(16, 21);
}

export default getDailyForecast;
