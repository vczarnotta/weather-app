import { getWeather } from "./services/getWeather.js";
import { modifySearchValue } from "./utils/searchField.js";
import { City } from "./models/city.js";
import { getDayName, getMonthName } from "./utils/date.js";
import { createNewElement } from "./utils/createElement.js";
import { showWeatherBox } from "./components/weatherBox.js";

//Körs när sidan laddats
async function init() {
    //Skapa underrubrik
    const today = new Date();
    let text = `${getDayName(today)} ${today.getDate()} ${getMonthName(today)}`;
    const headingsContainer = document.querySelector("#headings");
    const subHeading = createNewElement("h2", text, "muted");
    headingsContainer.appendChild(subHeading);

    //Visa historik från localStorage
    const history = City.getHistory();
    for(const city of history) {
        const data = await getWeather(city.name);
        const weather = data.weather
        const newCity = new City(city.name, weather, city.lat, city.lon);
    }
    
    const cities = City.cities
    showWeatherBox(cities)
}

//Visa vädret för den sökta platsen på hemsidan
function displayWeather() {
    const searchField = document.querySelector(".search-box");
    const searchInput = document.querySelector(".search-box__input");

    //Lyssna efter "enter" eller submitknapp på inputfältet
    searchField.addEventListener("submit", async (event) => {
        //Stoppa sidan från att laddas om
        event.preventDefault();

        //Hämta sökvärdet och väder
        const cityName = modifySearchValue();
        const data = await getWeather(cityName);
        const weather = data.weather
        const lat = data.lat
        const lon = data.lon
    
        //Skapa en ny instans av City för varje sökning
        const newCity = new City(cityName, weather, lat, lon);
        City.updateHistory();
        const cities = City.cities
        showWeatherBox(cities);

        //Rensa sökfältet
        searchInput.value = "";
    });
}

// ----- KÖR FUNKTIONER -----
init();
displayWeather();
