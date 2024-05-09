function getWeather(city) {
    let apiKey = "b739b64actfb7710ab2aa8f6044o4c38"
    let apiURL = "https://api.shecodes.io/weather/v1/current?query={query}&key={key}"
}





function citySearch(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchElement.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", citySearch);
