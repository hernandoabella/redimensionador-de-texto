const tamano = document.getElementById("tamano");
const texto = document.getElementById("texto");
const moonIcon = document.getElementById("moon-icon");
const body = document.body;

let modo = localStorage.getItem("modo") || "claro";

const setModo = (modo) => {
  body.classList.toggle("dark-mode", modo === "oscuro");
  moonIcon.classList.toggle("fa-moon", modo === "claro");
  moonIcon.classList.toggle("fa-sun", modo === "oscuro");
  localStorage.setItem("modo", modo);
}

const toggleModo = () => {
  modo = modo === "claro" ? "oscuro" : "claro";
  setModo(modo);
};

window.addEventListener("load", () => {
  setModo(modo);
});

window.addEventListener("unload", () => {
  localStorage.setItem("modo", modo);
});

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
  if (tamanoTexto < 40) {
    tamano.value = tamanoTexto + 1;
    texto.style.fontSize = `${tamano.value}px`;
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "aumentarVerde .3s";
};

moonIcon.addEventListener("click", toggleModo);