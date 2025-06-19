const apiKey = "";//Put your API key here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather")
const details = document.querySelector(".details")


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        weather.style.display = "none"
        details.style.display = "none"
        error.style.display = "block"
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        }
        weather.style.display = "block"
        details.style.display = "flex"
        error.style.display = "none"
    }

}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);

})


