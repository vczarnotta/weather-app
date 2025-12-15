import { getWeather } from "./api/getWeather.js";
import { modifySearchValue } from "./components/searchField.js";
import { City } from "./services/city.js";
import { getDayName, getMonthName } from "./services/date.js";
import { createNewElement } from "./components/createElement.js";
import { showWeatherBox } from "./components/weatherBox.js";


//Körs när sidan laddats
function init() {

    //Skapa underrubrik
    const today = new Date()
    let text = `${getDayName(today)} ${today.getDate()} ${getMonthName(today)}`
    const headingsContainer = document.querySelector("#headings")
    const subHeading = createNewElement("h2", text, "muted")
    headingsContainer.appendChild(subHeading)

}

//Visa vädret för den sökta platsen på hemsidan
function displayWeather() {
    const searchField = document.querySelector(".search-box")
    const searchInput = document.querySelector(".search-box__input")

    //Lyssna efter "enter" eller submitknapp på inputfältet
    searchField.addEventListener("submit", async (event) => {
        //Stoppa sidan från att laddas om
        event.preventDefault()

        //Hämta sökvärdet och väder
        const cityName = modifySearchValue()
        const currentWeather = await getWeather(cityName)

        //Skapa en ny instans av City för varje sökning
        const newCity = new City(cityName, currentWeather)
        showWeatherBox()

        //Rensa sökfältet
        searchInput.value = ""
    })
}

// ----- KÖR FUNKTIONER -----
init()
displayWeather()