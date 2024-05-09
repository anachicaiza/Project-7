function citySearch(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchElement.value;
}
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", citySearch);
