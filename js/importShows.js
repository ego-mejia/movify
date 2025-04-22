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
    const slider = document.getElementById("newShowsSlider");
    const container = document.getElementById("newShowsContainer");

    shows.forEach((show) => {
      const card = `
            <div class="new-card">
              <img src="${show.image}" alt="${show.name}" draggable="false">
              <h5>${show.name}</h5>
              <p> ${show.year}</p>
            </div>
          `;
      slider.innerHTML += card;
    });

    if (shows.length >= 5) {
      console.log("Shows >5");
      const sliderShadow = `
            <div id="sliderShadow"></div>
          `;
      container.innerHTML += sliderShadow;
    }
  }

  fetchTvShow().then((shows) => displayShows(shows));
}
