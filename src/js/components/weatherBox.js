import { createNewElement } from "./createElement.js";
import { City } from "../services/city.js";

export function showWeatherBox() {
    const latestContainer = document.querySelector("#container__latest")
    latestContainer.innerHTML = ""

    const historyContainer = document.querySelector("#container__history")
    historyContainer.innerHTML = ""

    City.cities.forEach((city, index) => {

        //True om index är 0 annars false
        let isLatest = index === 0
        
        const weatherBox = isLatest
            ? createLargeWeatherBox(city) //Om true
            : createSmallWeatherBox(city) //Om false

        weatherBox.classList.toggle("last-box", isLatest)

        let container = isLatest
            ? latestContainer //Om true
            : historyContainer //Om false

        container.appendChild(weatherBox)
    });
}

function createLargeWeatherBox(city) {
    //Skapa weatherbox
    const weatherBox = createNewElement("div", "", "weather-box")

    //Skapa div
    const weatherContainer = createNewElement("div", "", "weather-container")
    weatherBox.appendChild(weatherContainer)

    //Lägg till rubrik
    weatherContainer.appendChild(createNewElement("h3", `${city.city}`, "city-heading"))

    //Lägg till temperatur
    weatherContainer.appendChild(createNewElement("p", `${Math.round(city.temperature)}°`, "degrees"))

    //Lägg till tid för uppdatering
    weatherContainer.appendChild(createNewElement("p", `Uppdaterad ${city.time.slice(11)}`, "muted"))

    //Skapa div för vind
    const windContainer = weatherBox.appendChild(createNewElement("div", "", "weather-info"))
    windContainer.appendChild(createNewElement("h4", `Vind`))
    windContainer.appendChild(createNewElement("p", `Vindstyrka: ${city.windspeed} m/s`))
    windContainer.appendChild(createNewElement("p", `Riktning: ${city.winddirection}°`))

    //Skapa div för nederbörd
    const precipitationContainer = weatherBox.appendChild(createNewElement("div", "", "weather-info"))
    precipitationContainer.appendChild(createNewElement("h4", `Nederbörd`))
    precipitationContainer.appendChild(createNewElement("p", `Regnfall: ${city.rain}%`))
    precipitationContainer.appendChild(createNewElement("p", `Snöfall: ${city.snowfall}%`))

    //skapa div för molnighet
    const cloudinessContainer = weatherBox.appendChild(createNewElement("div", "", "weather-info"))
    cloudinessContainer.appendChild(createNewElement("h4", `Molnighet`))
    cloudinessContainer.appendChild(createNewElement("p", `Molnighet: ${city.cloudcover}%`))

    return weatherBox
}

function createSmallWeatherBox(city) {
    const weatherBox = createNewElement("div", "", "weather-box")
    weatherBox.appendChild(createNewElement("p", `${city.city} | ${city.temperature}°`, "history"))
    return weatherBox
}