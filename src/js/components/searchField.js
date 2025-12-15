//Hämta inputvärdet och gör om formatet
export function modifySearchValue() {
    const searchField = document.querySelector(".search-box__input")
    const search = searchField.value

    //Gör första bokstaven stor och resten små
    const modifiedSearchValue = search.charAt(0).toUpperCase() + search.substring(1).toLowerCase()

    return modifiedSearchValue
}

//Kanske lägga till så att det blir stor bokstav i första bokstaven för varje ord? Exempelvis New York, just nu blir det New york.