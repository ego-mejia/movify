import { importShows } from "../data/importShows.js";

async function main() {
  // --------- Importar data de películas
  const showsfavorites = await importShows(30, 1);

  const showsContainer = document.getElementById("showsfavorites");

  showsfavorites.forEach((show) => {
    const card = `
          <div class="slider__wrapper--card">
            <img src="${show.image}" alt="${show.name}" draggable="false">
            <h6>${show.name}</h6>
            <p> ${show.year}</p>
          </div>
        `;
    showsContainer.innerHTML += card;
  });
}

main();
