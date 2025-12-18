export class City {
    static cities = [];

    constructor(name, data, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.time = data.time;
        this.temperature = Math.round(data.temperature);
        this.windspeed = Math.round(data.windspeed * 0.278);
        this.winddirection = Math.round(data.winddirection);
        //lagt in provisoriska värden nedan då dessa inte finns i openMeteo
        this.cloudcover = Math.round(70);
        this.rain = Math.round(1.2);
        this.snowfall = Math.round(0.0);

        //Kontrollera om den sökta staden redan finns och ersätt i så fall
        for (let i = 0; i < City.cities.length; i++) {
            if (this.name === City.cities[i].city) {
                City.cities.splice(i, 1); //ta bort den gamla
                break; //avsluta loop
            }
        }

        //Lägg till längst fram i array
        City.cities.unshift(this);

        //Ta bort den äldsta i array om mer än 6 st.
        if (City.cities.length > 10) {
            City.cities.pop();
        }
    }

    //Uppdatera localStorage
    static updateHistory() {
        const history = City.cities.map(city => ({
            name: city.name,
            lat: city.lat,
            lon: city.lon
        }))
        
        localStorage.setItem("history", JSON.stringify(history))
    }

    //Hämta historiken
    static getHistory() {
        return JSON.parse(localStorage.getItem("history")) || []
    }
}
