const API_KEY = "YOUR_API_KEY";
const result = document.getElementById("result");

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  result.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    result.innerHTML = `
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (err) {
    result.innerHTML = err.message;
  }
}