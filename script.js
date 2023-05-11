const tamano = document.getElementById("tamano");
const texto = document.getElementById("texto");
const moonIcon = document.getElementById("moon-icon");
const body = document.body;

let modo = localStorage.getItem("modo") || "claro"; // 1. 

const setModo = (modo) => { // 2. 
  body.classList.toggle("dark-mode", modo === "oscuro");
  localStorage.setItem("modo", modo); // 5.
}

const toggleModo = () => { // 3.
  modo = modo === "claro" ? "oscuro" : "claro";
  setModo(modo);
  moonIcon.classList.toggle("fa-moon");
  moonIcon.classList.toggle("fa-sun");
};

window.addEventListener("load", () => { // 4.
  setModo(modo);
});

window.addEventListener("unload", () => {
  localStorage.setItem("modo", modo); // 5.
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
  if (tamanoTexto < 30) {
    tamano.value = tamanoTexto + 1;
    texto.style.fontSize = `${tamano.value}px`;
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "aumentarVerde .3s";
};

moonIcon.addEventListener("click", toggleModo);
