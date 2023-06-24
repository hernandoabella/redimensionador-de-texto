const tamano = document.getElementById("tamano");
const texto = document.getElementById("texto");

// Función para guardar el tamaño en el localStorage
const guardarTamanoEnLocalStorage = (tamano) => {
  localStorage.setItem("tamanoTexto", tamano);
};

// Función para obtener el tamaño del localStorage
const obtenerTamanoDeLocalStorage = () => {
  const tamanoAlmacenado = localStorage.getItem("tamanoTexto");
  if (tamanoAlmacenado) {
    return parseInt(tamanoAlmacenado);
  }
  return null;
};

const disminuir = () => {
  let tamanoTexto = Number(tamano.value);
  if (tamanoTexto > 8) {
    tamanoTexto -= 1;
    tamano.value = tamanoTexto;
    texto.style.fontSize = `${tamanoTexto}px`;
    guardarTamanoEnLocalStorage(tamanoTexto);
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "disminuirRojo .3s";
};

const aumentar = () => {
  let tamanoTexto = Number(tamano.value);
  if (tamanoTexto < 60) {
    tamanoTexto += 1;
    tamano.value = tamanoTexto;
    texto.style.fontSize = `${tamanoTexto}px`;
    guardarTamanoEnLocalStorage(tamanoTexto);
  }
  texto.style.animation = "none";
  void texto.offsetWidth;
  texto.style.animation = "aumentarVerde .3s";
};

tamano.addEventListener("input", function () {
  let tamanoTexto = Number(tamano.value);

  // Limit the size within the range of 8 and 60
  if (tamanoTexto < 8) {
    tamanoTexto = 8;
  } else if (tamanoTexto > 60) {
    tamanoTexto = 60;
  }

  // Update the input value with the limited size
  tamano.value = tamanoTexto;
  texto.style.fontSize = `${tamanoTexto}px`;

  guardarTamanoEnLocalStorage(tamanoTexto);
});

// Obtener el tamaño almacenado en el localStorage al cargar la página
const tamanoAlmacenado = obtenerTamanoDeLocalStorage();
if (tamanoAlmacenado) {
  tamano.value = tamanoAlmacenado;
  texto.style.fontSize = `${tamanoAlmacenado}px`;
}