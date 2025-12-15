import { createNewElement } from "./createElement.js";
import { City } from "../services/city.js";

export function showWeatherBox() {
    const latestContainer = document.querySelector("#container__latest")
    latestContainer.innerHTML = ""

    const historyContainer = document.querySelector("#container__history")
    historyContainer.innerHTML = ""

    City.cities.forEach((city, index) => {
        let weatherBox = createWeatherBox(city)
        
        
        if(index === 0) {
            weatherBox.classList.add("last-box") //Lägg till klass för den nyaste sökningen för att kunna stylea annorlunda
            latestContainer.appendChild(weatherBox)
        } else {
            weatherBox.classList.remove("last-box") //Ta bort gammal klass
            historyContainer.appendChild(weatherBox)
        }
    });
}

export function createWeatherBox(city) {
    //Skapa weatherbox
    const weatherBox = createNewElement("div", "", "weather-box")

    //Skapa div
    const weatherContainer = createNewElement("div")
    weatherBox.appendChild(weatherContainer)

    //Lägg till rubrik
    weatherContainer.appendChild(createNewElement("h3", `${city.city}`, "city-heading"))

    //Skapa div
    const weatherInfo = weatherContainer.appendChild(createNewElement("div", "", "weather-info"))

    // //Lägg till väderinformation
    weatherInfo.appendChild(createNewElement("p", `Uppdaterad ${city.time.slice(11)}`, "muted"))
    weatherInfo.appendChild(createNewElement("p", `Vindstyrka: ${city.windspeed} m/s`))
    weatherInfo.appendChild(createNewElement("p", `Riktning: ${city.winddirection}°`))
    weatherInfo.appendChild(createNewElement("p", `Molnighet: ${city.cloudcover}%`))


    //Om regn eller snö visa på sidan
    if(city.rain > 0) {
        weatherInfo.appendChild(createNewElement("p", `Regnfall: ${city.rain}%`))
    }

    if(city.snowfall > 0) {
        weatherInfo.appendChild(createNewElement("p", `Snöfall: ${city.snowfall}%`))
    }
    
    //Lägg till temperatur
    const degreesContainer = createNewElement("div", "", "degrees-container")
    weatherBox.appendChild(degreesContainer)

    degreesContainer.appendChild(createNewElement("p", `${Math.round(city.temperature)}`, "degrees"))
    degreesContainer.appendChild(createNewElement("p", `°C`, "degrees-icon"))

    return weatherBox
}