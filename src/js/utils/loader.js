let loaderTimeout = null;

export function showLoader(delay = 300) {
    const loader = document.querySelector("#loader")

    //Visa inte loader förrän 300ms efter laddningen påbörjat för att undvika att UI:n hoppar
    loaderTimeout = setTimeout(() => {
        loader.classList.remove("hidden")
    }, delay)
}

export function hideLoader() {
    const loader = document.querySelector("#loader")
    
    clearTimeout(loaderTimeout)
    loader.classList.add("hidden")
}