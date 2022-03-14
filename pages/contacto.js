function main() {
  const containerHeaderEl = document.querySelector(".header-container");
  headerNav(containerHeaderEl);

  const containerContactameEl = document.querySelector(".contactame");
  contactoForm(containerContactameEl);

  const containerFooterEl = document.querySelector(".footer-container");
  footer(containerFooterEl);

  const botonAbreMenuEl = document.querySelector(
    ".header__visible__boton-desplegar"
  );
  const botonCerrarMenuEl = document.querySelector(
    ".ventana-links__boton-cerrar"
  );
  const menuEl = document.querySelector(".ventana-links");

  botonAbreMenuEl.addEventListener("click", () => {
    menuEl.style.display = "flex";
  });

  botonCerrarMenuEl.addEventListener("click", () => {
    menuEl.style.display = "";
  });
}

main();
