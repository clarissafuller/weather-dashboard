//DOM ELEMMENTS ========================
var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history');

//DATA==================================
var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = '';
var currentLatitude = 0;
var currentLongitude = 0;
//FUNCTIONS=============================

dayjs.extended(window.dayjs_plugin_utc);
dayjs.extended(window.dayjs_plugin_timezone);

function renderSearchHistory() {
  searchHistoryContainer.innerHTML = '';

for (var i = searchHistory.length - 1; i >= 0; i--) {
  var btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.setAttribute('aria-controls', 'today forecast');
  btn.classList.add('history-btn', 'btn-history');

btn.setAttribute('data-search', searchHistory[i]);
btn.textContent = searchHistory[i];
searchHistoryContainer.append(btn);

}

}

function appendToHistory(search) {
  if (searchHistory.indexOf(search) !== -1) {
    return;
  }
  searchHistory.push(search);
  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

function renderCurrentWeather( city, weather) {
var date = dayjs().format('M/D/YYY');
var tempF = weather.main.temp;
var windMph = weather.wind.speed;
var humidity = weather.main.humidity;
var iconUrl = `https://openweathermap.org/img/w${weather.weather[0].icon}.png`;
var iconDescription = weather.weather[0].description || weather[0].main;

var card = document.createElement('div');
var cardBody = document.createElement('div');
var heading = document.createElement('h2');
var weatherIcon = document.createElement('img');
var tempEl = document.createElement('p');
var windEl = document.createElement('p');
var humidityEl = document.createElement('p');

card.setAttribute('class', 'card');
cardBody.setAttribute('class', 'card-body');
card.append(cardBody);

heading.setAttribute('class', 'h3 card-title');
tempEl.setAttribute('class', 'card-text');
windEl.setAttribute('class', 'card-text');
humidityEl.setAttribute('class', 'card-text');

heading.textContent = `${city} (${date})`;
weatherIcon.setAttribute('src', iconUrl);
weatherIcon.setAttribute('alt', iconDescription);
weatherIcon.setAttribute('class', 'weather-img');
heading.append(weatherIcon);
tempEl.textContent = `Temp: ${tempF} F`;
windEl.textContent = `Wind: ${windMph} MPH`;
humidityEl.textContent = `Humidity: ${humidity} %`

}
//USER INTERACTIONS======================

//INITIALIZATIONS=========================
