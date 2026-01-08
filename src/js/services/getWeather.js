//Sök efter matchande städer och returnera vädret för staden
export async function getWeather(city) {
    //Rensa eventuellt felmeddelande
    const searchMessage = document.querySelector(".message");
    searchMessage.textContent = "";

    //Hämta matchande städer
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json&utm_source=chatgpt.com`;
    const cityResults = await fetchJSON(url);

    //Om inget resultat gavs från sökningen, skriv ut att stad inte finns.
    if (!cityResults.results || cityResults.results.length === 0) {
        searchMessage.textContent = "Staden kunde inte hittas";
        return;
    }

    //Hämta lat och lon för första sökresultatet
    const lat = cityResults.results[0].latitude;
    const lon = cityResults.results[0].longitude;

    //Hämta väder med hjälp av lat och lon
    url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,cloud_cover,rain,snowfall,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_days=1&wind_speed_unit=ms
`;
    const weather = await fetchJSON(url);

    return ({ weather: weather.current, lat: lat, lon: lon });
}

async function fetchJSON(url) {
    try {
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        //ATT GÖRA: GÖR FELET TYDLIGARE -- VISA PÅ SIDAN
        console.error(`Fel vid hämtning av data från ${url}`);
    }
}
