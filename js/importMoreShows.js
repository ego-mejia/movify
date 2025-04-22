// import axios from "axios";

/*
Import data from the following website:
// https://www.tvmaze.com/api

*/
export function importMoreShows(cantidadSeries) {
  async function fetchMoreTvShow() {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows?page=2");
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

  function displayMoreShows(shows) {
    const slider = document.getElementById("moreShowsSlider");

    shows.forEach((show) => {
      const card = `
            <div class="new-card">
              <img src="${show.image}" alt="${show.name}">
              <h3>${show.name}</h3>
              <p>Año: ${show.year}</p>
            </div>
          `;
      slider.innerHTML += card;
    });
  }

  fetchMoreTvShow().then((shows) => displayMoreShows(shows));
}
