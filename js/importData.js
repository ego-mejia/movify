/*
Import data from the following website:
// https://www.tvmaze.com/api

*/
export function importData(cantidadSeries) {
  async function fetchTvShow() {
    try {
      const response = await fetch("https://api.tvmaze.com/shows?page=0");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Procesar los datos para extraer lo necesario
      const processedShows = data.slice(0, cantidadSeries).map((show) => ({
        id: show.id,
        name: show.name,
        year: show.premiered ? show.premiered.split("-")[0] : "N/A",
        image: show.image?.medium || "https://via.placeholder.com/210x295", // Imagen por defecto si no hay
      }));

      console.log("Lista procesada:", processedShows);
      return processedShows;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  }

  function displayShows(shows) {
    const container = document.getElementById("shows-container");

    shows.forEach((show) => {
      const card = `
        <div class="show-card">
          <img src="${show.image}" alt="${show.name}">
          <h3>${show.name}</h3>
          <p>Año: ${show.year}</p>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  fetchTvShow().then((shows) => displayShows(shows));
}
