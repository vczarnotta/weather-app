//Returnerar en array med historik eller tom array om historik inte finns (stadsnamn, lat, lon)
export function getSearchHistory() {
    return JSON.parse(localStorage.getItem("history")) || [];
}

export function addCityToHistory(newCity) {
    const history = getSearchHistory(); //array

    //Kontrollera om den sökta staden redan finns och ersätt i så fall
    for (let i = 0; i < history.length; i++) {
        if (history[i].city === newCity.city) {
            history.splice(i, 1); //ta bort den gamla
            break; //avsluta loop
        }
    }

    //Lägg till längst fram i array
    history.unshift(newCity);

    //Ta bort den äldsta i array om mer än 10 st.
    if (history.length > 10) {
        history.pop();
    }

    //Spara i localStorage
    localStorage.setItem("history", JSON.stringify(history));

    return history;
}
