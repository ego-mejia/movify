import { slider } from "../components/slider.js";
import { importShows } from "../data/importShows.js";

async function main() {
  // --------- Importar data de películas
  const showsNew = await importShows(10, 0);
  const showsToKeepWatching = await importShows(10, 2);

  // Slider 1
  slider(showsNew, "tvShowsNew");
  // Slider 2
  slider(showsToKeepWatching, "tvShowsKeepWatching");
}

main();
