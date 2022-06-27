import {
  getDailyForecast,
  getDayFormat,
  getHourFormat,
} from "./getDailyForecast";

describe("get forecast", function () {
  test("returns day format", function () {
    expect(getDayFormat("2022-06-10 09:00:00")).toBe("Fri");
  });

  test("returns time format", function () {
    expect(getHourFormat("2022-06-10 09:00:00")).toBe("09");
  });

  // test("returns forecast", function () {
  //   expect(getDailyForecast()).toBe();
  // });
});
