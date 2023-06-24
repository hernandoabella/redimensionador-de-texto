const tamano = document.getElementById("tamano");
const texto = document.getElementById("texto");

const disminuir = () => {
  let tamanoTexto = Number(tamano.value);
  if (tamanoTexto > 20) {
    tamano.value = tamanoTexto - 2;
    texto.style.fontSize = `${tamano.value}px`;
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "disminuirRojo .3s";
};

const aumentar = () => {
  let tamanoTexto = Number(tamano.value);
  if (tamanoTexto < 40) {
    tamano.value = tamanoTexto + 2;
    texto.style.fontSize = `${tamano.value}px`;
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "aumentarVerde .3s";
};

const cambiarTamano = () => {
  let tamanoTexto = Number(tamano.value);
  texto.style.fontSize = `${tamanoTexto}px`;
};

document.getElementById("btnDisminuir").addEventListener("click", disminuir);
document.getElementById("btnAumentar").addEventListener("click", aumentar);