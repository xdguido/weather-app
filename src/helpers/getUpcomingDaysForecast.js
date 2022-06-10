import moment from "moment";

function getDailyForecast(data) {
  let days = getDays(data.list);

  days.map((day) => {
    let forecast = {};

    for (let i = 0; i < data.list.length; i++) {
      const moment = data.list[i];

      const temp = moment.main.temp;
      const max_temp = moment.main.temp_max;
      const min_temp = moment.main.temp_min;
      const feels_like = moment.main.feels_like;
      const humidity = moment.main.humidity;
      const wind = {
        deg: moment.wind.deg,
        gust: moment.wind.gust,
        speed: moment.wind.speed,
      };

      if (day["name"] === getDayFormat(moment.dt)) {
        const hour = getHourFormat(moment.dt);
        let new_forecast = {};
        new_forecast[hour] = [
          temp,
          max_temp,
          min_temp,
          feels_like,
          humidity,
          wind,
        ];
        return { ...forecast, new_forecast };
      }
    }
    return { ...day, forecast };
  });
  return days;
}

function getDays(data) {
  let temp;
  let days = [];

  data.list.forEach((item) => {
    if (getDayFormat(item.dt) != temp) {
      temp = getDayFormat(item.dt);
      days.push({ name: temp });
    }
  });
  return days;
}
function getDayFormat(data) {
  moment(data).format("ddd");
}
function getHourFormat(data) {
  moment(data).format("HH");
}
function getAverage(condition) {
  condition.reduce((a, b) => a + b) / condition.length;
}
