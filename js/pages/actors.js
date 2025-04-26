import { importActors } from "../data/importActors.js";

async function main() {
  // --------- Importar data de películas
  //   const actors = await importActors(30);

  const container = document.getElementById("actors");

  //   console.log(actors);
  //   actors.forEach((actor) => {
  //     const card = `
  //               <div class="actor-card">
  //                 <img src="${actor.image}" alt="${actor.image}">
  //                 <h2>${actor.name}</h2>
  //                 <h3>${actor.country}</h3>
  //                 <p>Año: ${actor.birthday}</p>
  //               </div>
  //             `;
  //     container.innerHTML += card;
  //   });
  const cantidadPersonas = 30;
  for (let i = 1; i <= cantidadPersonas; i++) {
    importActors(i).then((actor) => {
      const card = `
    <div class="actor-card">
      <img src="${actor.image}" alt="${actor.image}">
      <h6>${actor.name}</h6>
      <h6>${actor.country}</h6>
      <p>${actor.birthday}</p>
    </div>
  `;
      container.innerHTML += card;
    });
  }
}

main();

// function displayActor(actor) {
//   const container = document.getElementById("actors");
//   const card = `
//               <div class="actor-card">
//                 <img src="${actor.image}" alt="${actor.image}">
//                 <h2>${actor.name}</h2>
//                 <h3>${actor.country}</h3>
//                 <p>Año: ${actor.birthday}</p>
//               </div>
//             `;
//   container.innerHTML += card;

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
// }
// for (let i = 1; i <= cantidadPersonas; i++) {
//   fetchActors(i).then((actor) => displayActor(actor));
// }
