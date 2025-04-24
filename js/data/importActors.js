// import axios from "axios";

/*
Import data from the following website:
// https://www.tvmaze.com/api

*/
const cantidadPersonas = 20;

export function importActors(cantidadPersonas) {
  async function fetchActors(persona) {
    try {
      const response = await axios.get(
        "https://api.tvmaze.com/people/" + persona
      );
      const data = response.data;
      const actor = {
        id: data.id,
        name: data.name,
        birthday: data.birthday,
        country: data.country.code,
        // country: data.country?.code || "N/A",
        image: data.image.medium,
      };

      console.log("Respuesta:", actor);
      return actor;
    } catch (e) {
      console.error("Error:", e);
      return [];
    }
  }

  function displayActor(actor) {
    const container = document.getElementById("people-container");
    const card = `
              <div class="actor-card">
                <img src="${actor.image}" alt="${actor.image}">
                <h2>${actor.name}</h2>
                <h3>${actor.country}</h3>
                <p>Año: ${actor.birthday}</p>
              </div>
            `;
    container.innerHTML += card;

    // shows.forEach((show) => {
    //   const card = `
    //           <div class="show-card">
    //             <img src="${show.image}" alt="${show.name}">
    //             <h3>${show.name}</h3>
    //             <p>Año: ${show.year}</p>
    //           </div>
    //         `;
    //   container.innerHTML += card;
    // });
  }
  for (let i = 1; i <= cantidadPersonas; i++) {
    fetchActors(i).then((actor) => displayActor(actor));
  }
}
