export function slider(data, insertHTML) {
  console.log("slider.js imported");

  function displayCards(shows) {
    /*
    Función para insertar cartas en el contenedor
    */
    const sliderContainer = document.getElementById(insertHTML);
    sliderContainer.classList.add("slider");

    // --------- Add buttons
    const sliderButtons = `
    <button class="slider__button-left">
        <img src="./assets/chevron-left.svg" alt="chevron left" />
    </button>

    <button class="slider__button-right">
        <img src="./assets/chevron-right.svg" alt="chevron right" />
    </button>
  `;
    sliderContainer.innerHTML += sliderButtons;

    // --------- crear slider
    const sliderWrapper = `<div class="slider__wrapper"></div>`;
    sliderContainer.innerHTML += sliderWrapper;

    // const container = document.getElementById("newShowsContainer");

    shows.forEach((show) => {
      const card = `
            <div class="slider__wrapper--card">
              <img src="${show.image}" alt="${show.name}" draggable="false">
              <h6>${show.name}</h6>
              <p> ${show.year}</p>
            </div>
          `;
      sliderContainer.lastChild.innerHTML += card;
    });

    // Variables de control
    let currentPosition = 0;
    const leftButton = sliderContainer.querySelector(".slider__button-left");
    const rightButton = sliderContainer.querySelector(".slider__button-right");
    const cards = sliderContainer.lastChild.querySelectorAll(
      ".slider__wrapper--card"
    ); // Seleccionar todas las tarjetas

    // Mover tarjetas individualmente
    rightButton.addEventListener("click", () => {
      currentPosition -= 500;
      cards.forEach((card) => {
        card.style.transform = `translateX(${currentPosition}px)`;
      });
    });

    leftButton.addEventListener("click", () => {
      currentPosition += 500;
      cards.forEach((card) => {
        card.style.transform = `translateX(${currentPosition}px)`;
      });
    });

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
