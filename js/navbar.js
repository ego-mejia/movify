export function navbar() {
  const header = document.querySelector("header");
  const navbarHTML = `
      <nav class="navbar">
        <img src="./assets/Logo--big.svg" alt="Movify logo" />
        <div class="navbar__links">
          <a href="./index.html">Home</a>
          <a href="./my-list.html">My List</a>
          <a href="./actors.html">Actors</a>
        </div>
      </nav>
    `;

  header.innerHTML = navbarHTML;
}

// document.addEventListener("DOMContentLoaded", () => {
//   navbar(); // 👈 solo llama a la función
// });
