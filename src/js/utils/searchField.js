//Hämta inputvärdet och gör om formatet
export function modifySearchValue() {
    const searchField = document.querySelector(".search-box__input");
    const search = searchField.value.trim();

    // Dela upp på mellanslag, gör första bokstaven i varje ord stor
    const modifiedSearchValue = search
        .split(" ")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        )
        .join(" ");

    return modifiedSearchValue;
}
