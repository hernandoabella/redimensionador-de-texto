const size = document.getElementById("size");
const text = document.getElementById("text");

const decrease = () => {
  let textSize = Number(size.value);
  if (textSize > 0) {
    size.value = textSize - 1;
    text.style.fontSize = `${size.value}px`;
  }
};

const increase = () => {
  let textSize = Number(size.value);
  if (textSize < 500) {
    size.value = textSize + 1;
    text.style.fontSize = `${size.value}px`;
  }
};
