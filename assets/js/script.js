const search = document.getElementById("search")
const select = document.querySelector(".form-select")
const form = document.querySelector("form")
const city = document.getElementById("city")
const country = document.getElementById("country")
const forecast = document.getElementById("forecast")
const sky = document.getElementById("sky")
const result = document.getElementById("result");

async function getForecast(url) {
    let promise = await fetch(url);
    let response = await promise.json();

    return response;

}

form.addEventListener("submit", change)

async function change(e) {
    e.preventDefault();

    let response = await getForecast("https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=" + `${search.value}`
    )
    result.innerHTML="";
    result.innerHTML += `
    <p>City<span id="city"> ${response.location.name}</span></p>
    <p>Country<span id="country">: ${response.location.country}</span></p>
    <p>Weather Forecast:<span id="forecast">: ${response.current.temp_c}</span></p>
    <p>Sky Condition<span id="sky">  <img src="${response.current.condition.icon}" alt="">: ${response.current.condition.text}</span></p>
    `

}

