const apiKey = "df67743ebe5e15a97ec864d48ca6fd0c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector("#search");
const weatherImg = document.querySelector(".print-weather");

function start() {
  let inputCity = search.value;
  checkWeather(inputCity);
}

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "flex";
    document.querySelector("#middle-container").style.display = "none";
    document.querySelector("#bottom-container").style.display = "none";
  } 
  else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".place-text").innerHTML = data.name;
    document.querySelector(".print-degree").innerHTML = Math.round(
      data.main.temp
    );
    document.querySelector(".print-humidity").innerHTML = data.main.humidity;
    document.querySelector(".print-wind").innerHTML = data.wind.speed;

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "assests/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "assests/images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "assests/images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "assests/images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImg.src = "assests/images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "assests/images/mist.png";
    }

    document.querySelector("#middle-container").style.display = "flex";
    document.querySelector("#bottom-container").style.display = "flex";
  }
}
