import { City } from "../models/city.js";
import { getWeather } from "../services/getWeather.js";
import { hideLoader, showLoader } from "../utils/loader.js";
import { showWeatherBox } from "./weatherBox.js";

//Gör staden stor för den klickade staden
export async function enableHistoryClick(cityName) {
    //Jämför mot array
    const cityData = City.cities.find((c) => c.name === cityName);
    if (!cityData) return;

    showLoader();

    try {
        //Hämta uppdaterat väder
        const data = await getWeather(cityName);

        //Skapa ny City-instans så den hamnar högst upp
        new City(cityName, data.weather, cityData.lat, cityData.lon);

        //Uppdatera localStorage och visa om
        City.updateHistory();
        showWeatherBox(City.cities);
    } finally {
        hideLoader();
    }
}
