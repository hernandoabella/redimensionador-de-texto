const tamano = document.getElementById("tamano");
const texto = document.getElementById("texto");
const body = document.body;

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