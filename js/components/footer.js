export function footer() {
  console.log("footer.js imported");
  const footer = document.querySelector("footer");
  const footerHTML = `
<div class="footer">
        <div class="footer__social">
          <a href="">
            <img src="./assets/Facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="./assets/Instagram.svg" alt="" />
          </a>
          <a href="">
            <img src="./assets/twitter.svg" alt="" />
          </a>
          <a href="">
            <img src="./assets/Youtube.svg" alt="" />
          </a>
        </div>
        <div class="footer__links">
          <div class="footer__links--container">
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Contact us</a>
          </div>
          <div class="footer__links--container">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Legal Notices</a>
          </div>
          <div class="footer__links--container">
            <a href="#">Gift Cards</a>
            <a href="#">Movify Shop</a>
            <a href="#">Cookie Preferences</a>
          </div>
          <div class="footer__links--container">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
          </div>
        </div>
        <div class="footer__copyright">Copyright © 2025 Movify</div>
      </div>
    `;

  footer.innerHTML = footerHTML;
}

// document.addEventListener("DOMContentLoaded", () => {
//   navbar(); // 👈 solo llama a la función
// });
