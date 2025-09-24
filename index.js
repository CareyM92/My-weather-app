function formatDateTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;

  return `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  let cityName = response.data.city;
  let temperature = Math.round(response.data.temperature.current);

  let cityNameElement = document.querySelector("#city-name");
  cityNameElement.innerHTML = cityName;

  let temperatureValueElement = document.querySelector(
    ".current-temperature-value"
  );
  temperatureValueElement.innerHTML = temperature;

  let dateTimeElement = document.querySelector("#date-time");
  dateTimeElement.innerHTML = formatDateTime();
}

function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city").value.trim();
  if (cityInput === "") return;

  let apiKey = "ae0t61305d43e04b2da380f8d5bo6cef";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let dateTimeElement = document.querySelector("#date-time");
dateTimeElement.innerHTML = formatDateTime();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);
