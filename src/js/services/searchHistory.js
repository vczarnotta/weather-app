import { getWeather } from "./getWeather.js";
import { City } from "../models/city.js";
const STORAGE_KEY = "searchHistory";

//Returnerar en array med de 10 senaste sökta stadsnamnen, lat och lon
export function getSearchHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

//Lägg till i array
export function addCityToHistory(city) {
  const history = getSearchHistory();

  //Kontrollera om den sökta staden redan finns och ersätt i så fall
  for (let i = 0; i < history.length; i++) {
    if (history[i].city === city.city) {
      history.splice(i, 1); //ta bort den gamla
      break; //avsluta loop
    }
  }

  //Lägg till längst fram i array
  history.unshift(city);

  //Ta bort den äldsta i array om mer än 10 st.
  if (history.length > 10) {
    history.pop();
  }

  //Spara i localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));

  return history;
}

//Gör om från namn, lat och lon till hela objekt
export async function getCitiesFromHistory() {
  let history = getSearchHistory();
  const cities = [];

  for (const city of history) {
    const weather = await getWeather({ lat: city.lat, lon: city.lon });
    cities.push(new City(city.city, weather));
  }

  return cities;
}
