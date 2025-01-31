import { apiKey } from "../utils/apiKey";

const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector(
  "#input-localization"
);
const sectionWeatherInfo = document.querySelector("#weather-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !sectionWeatherInfo) return;
  const localization = input.value;

  if (localization.length < 3) {
    alert("O local precisa ter, pelo menos, 3 letras!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    const infos = {
      temp: Math.round(data.main.temp),
      localization: data.name,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    sectionWeatherInfo.innerHTML = `
    <div class="weather-data">
        <h2>${infos.localization}</h2>
        <span>${infos.temp}°C</span>
      </div>
    <img src="${infos.icon}" alt="${infos.localization}">
  `;
  } catch (error) {
    console.log(error);
  }
});
