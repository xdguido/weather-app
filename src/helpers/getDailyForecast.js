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
      main: {
        temp: item.main.temp,
        temp_max: item.main.temp_max,
        temp_min: item.main.temp_min,
        feels_like: item.main.feels_like,
        humidity: item.main.humidity,
      },
      wind: {
        speed: item.wind.speed,
        deg: item.wind.deg,
        gust: item.wind.gust,
      },
      weather: {
        id: item.weather[0].id,
        description: item.weather[0].description,
      },
    };

    if (day !== lastDay) {
      lastDay = day;
      let newDay = {};
      newDay["day"] = day;
      newDay[hour] = hourlyForecast;
      forecast.push(newDay);
    } else if (day === lastDay) {
      //get last item from forecast array
      const s = forecast.slice(-1)[0];
      //add new forecast and merge with last forecast item
      let m = {};
      m[hour] = hourlyForecast;
      const newItem = { ...s, ...m };
      //replace last forecast item with new item
      const index = forecast.indexOf(s);
      if (index !== -1) {
        forecast[index] = newItem;
      }
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
  return m.toString().substring(16, 18);
}
// function getAverage(condition) {
//   condition.reduce((a, b) => a + b) / condition.length;
// }

export { getDailyForecast, getDayFormat, getHourFormat };
