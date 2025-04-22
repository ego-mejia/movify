// import axios from "axios";

/*
Import data from the following website:
// https://www.tvmaze.com/api

*/
export function importShows(cantidadSeries) {
  async function fetchTvShow() {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows?page=0");
      const data = await response.data.slice(0, cantidadSeries).map((show) => ({
        id: show.id,
        name: show.name,
        year: show.premiered.split("-")[0],
        image: show.image.medium,
      }));
      console.log("Respuesta:", data);
      return data;
    } catch (e) {
      console.error("Error:", e);
      return [];
    }
  }

  function displayShows(shows) {
    const container = document.getElementById("shows-container");

    shows.forEach((show) => {
      const card = `
            <div class="show-card">
              <img src="${show.image}" alt="${show.name}">
              <h5>${show.name}</h5>
              <p> ${show.year}</p>
            </div>
          `;
      container.innerHTML += card;
    });
  }

  fetchTvShow().then((shows) => displayShows(shows));
}
