export function slider(data, insertHTML) {
  console.log("slider.js imported");

  function displayCards(shows) {
    /*
    Función para insertar cartas en el contenedor
    */
    const sliderContainer = document.getElementById(insertHTML);

    // crear slider
    const slider = `<div class="slider"></div>`;
    sliderContainer.innerHTML += slider;

    // const container = document.getElementById("newShowsContainer");

    shows.forEach((show) => {
      const card = `
            <div class="slider__card">
              <img src="${show.image}" alt="${show.name}" draggable="false">
              <h5>${show.name}</h5>
              <p> ${show.year}</p>
            </div>
          `;
      sliderContainer.firstChild.innerHTML += card;
    });

    // --------- Add buttons
    const sliderButtons = `
    <button class="slider__button left">
        <img src="./assets/chevron-left.svg" alt="chevron left" />
    </button>

    <button class="slider__button right">
        <img src="./assets/chevron-right.svg" alt="chevron right" />
    </button>
  `;

    sliderContainer.innerHTML += sliderButtons;

    // if (shows.length >= 5) {
    //   console.log("Shows >5");
    //   const sliderShadow = `
    //         <div id="sliderShadow"></div>
    //       `;
    //   container.innerHTML += sliderShadow;
    // }
  }

  // ---------- Insertar cartas en el contenedor
  displayCards(data);
}
