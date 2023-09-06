//DOM ELEMMENTS ========================

//DATA==================================
var cityName = document.getElementById("#search-input");
console.log(cityName);
var buttonElement = document.querySelector("#search-button");
//FUNCTIONS=============================
function handleClick(event) {
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q={cityName}&limit=5&appid=f2482696e807d323d0d132ef26887c56"
  )
    .then((response) => response.json())
    .then((data) => {
      // Process the API response data here
      console.log(data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
}

//USER INTERACTIONS======================
buttonElement.addEventListener("click", handleClick);
//INITALIZATIONS=========================
