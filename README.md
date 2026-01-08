# 🌦️ Weather App
En webbaserad väderapplikation byggd i vanilla JavaScript som hämtar och visar aktuellt väder för sökta städer.
Applikationen visar den senast sökta staden i en större vy och sparar de 10 senaste sökningarna i lokal lagring.
> 📌 Uppgiften var ursprungligen en gruppuppgift från Chas Academy, men denna implementation är helt gjord av mig själv i syfte att öva JavaScript, modulär kodstruktur och API-hantering.

## 🚀 Funktioner
- 🔍 Sök väder på stad
- 🌡️ Visar aktuell temperatur, vind, nederbörd och molnighet
- 🕒 Lokal tid för vald stad
- 📦 Sparar de 10 senaste sökningarna i localStorage
- 📊 Historik visas som mindre väderboxar
- 🖱️ Klicka på en historik-post för att visa den som utvidgad vy
- ⏳ Loader med fördröjning för bättre UX (ingen UI-jump)
- 🧩 Modulär kodstruktur (models, services, components, utils)

## 🛠️ Teknologier
- Vanilla JavaScript (ES6-moduler)
- HTML5 & CSS3
- Open-Meteo API för väderdata
- LocalStorage för historik

## 📁 Projektstruktur
```
src/  
├── assets/icons/  
├── css/  
│   ├── components/  
│   ├── base.css  
│   ├── layout.css  
│   ├── style.css  
├── js/  
│   ├── components/  
│   ├── models/  
│   ├── services/  
│   ├── utils/  
│   └── main.js  
├── index.html  
└── README.md
```
## 📸 UI-beskrivning
- Den senast sökta staden visas i en större vädervy
- Tidigare sökningar visas som mindre kort längst ner
- Klick på ett kort gör det till den aktiva staden
- Loader visas endast om ett anrop tar längre tid än 300 ms

## 📝 Notering
Detta projekt är inte ett färdigt produktionssystem utan ett övningsprojekt med fokus på kodkvalitet, struktur och förståelse.