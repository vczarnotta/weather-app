import { createNewElement } from "../utils/createElement.js";

export function showWeatherBox(cities) {
    const latestContainer = document.querySelector("#container__latest");
    const historyContainer = document.querySelector("#container__history");

    latestContainer.innerHTML = "";
    historyContainer.innerHTML = "";

    cities.forEach((city, index) => {
        //True om index är 0 annars false
        let isLatest = index === 0;

        const weatherBox = isLatest
            ? createLargeWeatherBox(city) //Om true
            : createSmallWeatherBox(city); //Om false

        weatherBox.classList.toggle("last-box", isLatest);

        let container = isLatest
            ? latestContainer //Om true
            : historyContainer; //Om false

        //Lägg till dataset för att kunna göra klickbar
        weatherBox.dataset.city = city.name

        //Visa på sidan
        container.appendChild(weatherBox);
    });
}

function createLargeWeatherBox(city) {
    //Skapa weatherbox
    const weatherBox = createNewElement("div", "", "weather-box");

    //Skapa div
    const weatherContainer = createNewElement("div", "", "weather-container");
    weatherBox.appendChild(weatherContainer);

    //Lägg till rubrik
    weatherContainer.appendChild(
        createNewElement("h3", `${city.name}`, "city-heading")
    );

    //Lägg till temperatur
    weatherContainer.appendChild(
        createNewElement("p", `${Math.round(city.temperature)}°`, "degrees")
    );

    //Lägg till tid för uppdatering
    weatherContainer.appendChild(
        createNewElement("p", `Lokal tid: ${city.time.slice(11)}`, "muted")
    );

    //Skapa div för vind
    const windContainer = weatherBox.appendChild(
        createNewElement("div", "", "weather-info")
    );
    windContainer.appendChild(createNewElement("h4", `Vind`));
    windContainer.appendChild(
        createNewElement("p", `Vindstyrka: ${city.windspeed} m/s`)
    );
    windContainer.appendChild(
        createNewElement("p", `Riktning: ${city.winddirection}°`)
    );

    //Skapa div för nederbörd
    const precipitationContainer = weatherBox.appendChild(
        createNewElement("div", "", "weather-info")
    );
    precipitationContainer.appendChild(createNewElement("h4", `Nederbörd`));
    precipitationContainer.appendChild(
        createNewElement("p", `Regnfall: ${city.rain} mm`)
    );
    precipitationContainer.appendChild(
        createNewElement("p", `Snöfall: ${city.snowfall} cm`)
    );

    //skapa div för molnighet
    const cloudinessContainer = weatherBox.appendChild(
        createNewElement("div", "", "weather-info")
    );
    cloudinessContainer.appendChild(createNewElement("h4", `Molnighet`));
    cloudinessContainer.appendChild(
        createNewElement("p", `Molnighet: ${city.cloudcover}%`)
    );

    return weatherBox;
}

function createSmallWeatherBox(city) {
    const weatherBox = createNewElement("div", "", "weather-box");
    weatherBox.appendChild(
        createNewElement("p", `${city.name} | ${city.temperature}°`, "history")
    );
    return weatherBox;
}
