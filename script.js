const tamano = document.getElementById("tamano");
const texto = document.getElementById("texto");

const disminuir = () => {
  let tamanoTexto = Number(tamano.value);
  if (tamanoTexto > 10) {
    tamano.value = tamanoTexto - 1;
    texto.style.fontSize = `${tamano.value}px`;
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "disminuirRojo .3s";
};

const aumentar = () => {
  let tamanoTexto = Number(tamano.value);
  if (tamanoTexto < 30) {
    tamano.value = tamanoTexto + 1;
    texto.style.fontSize = `${tamano.value}px`;
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "aumentarVerde .3s";
};

const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const moonIcon = document.getElementById("moon-icon");
  moonIcon.classList.toggle("fa-moon");
  moonIcon.classList.toggle("fa-sun");
};
