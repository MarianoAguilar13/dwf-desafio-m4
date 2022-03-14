function headerNav(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <div class="header">
      <div class="header__visible">
        <div class="header__visible__logo-container">
          <label class="header__visible__logo-container__logo">MARIANO</label>
        </div>
        <div class="header__links">
          <a class="header__links__link" href="https://github.com/MarianoAguilar13/dwf-desafio-m4/portfolio.html" target="_blank"
            >Portfolio</a
          >
          <a class="header__links__link" href="https://github.com/MarianoAguilar13/dwf-desafio-m4/servicios.html" target="_blank"
            >Servicios</a
          >
          <a class="header__links__link" href="https://github.com/MarianoAguilar13/dwf-desafio-m4/contacto.html" target="_blank"
            >Contacto</a
          >
        </div>
        <div class="header__visible__boton-desplegar-container">
          <button class="header__visible__boton-desplegar">
            <div class="header__visible__boton-desplegar__barras"></div>
            <div class="header__visible__boton-desplegar__barras"></div>
            <div class="header__visible__boton-desplegar__barras"></div>
          </button>
        </div>
      </div>
      <div class="ventana-links">
        <button class="ventana-links__boton-cerrar">x</button>
        <a class="ventana-links__link link-uno" href="https://github.com/MarianoAguilar13/dwf-desafio-m4/portfolio.html" target="_blank" "
          >Portfolio</a
        >
        <a class="ventana-links__link link-dos" href="https://github.com/MarianoAguilar13/dwf-desafio-m4/servicios.html" target="_blank" "
          >Servicios</a
        >
        <a class="ventana-links__link link-tres" href="https://github.com/MarianoAguilar13/dwf-desafio-m4/contacto.html" target="_blank" "
          >Contacto</a
        >
      </div>
    </div>`;

  el.appendChild(componentEl);
}
