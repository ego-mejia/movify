export function navbar() {
  const header = document.querySelector("header");
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="./assets/Logo--big.svg"
          alt="Logo"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./index.html">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./index.html">
              Series
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./my-list.html">
              Mi lista
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="./actors.html">
              Actores
            </a>
          </li>
        </ul>
        <div>
          <a>
            <img src="./assets/search.svg" alt="" />
          </a>
          <a>
            <img src="./assets/bell.svg" alt="" />
          </a>
          <a>
            <img src="./assets/user.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </nav>
    `;

  header.innerHTML = navbarHTML;
}

// document.addEventListener("DOMContentLoaded", () => {
//   navbar(); // 👈 solo llama a la función
// });
