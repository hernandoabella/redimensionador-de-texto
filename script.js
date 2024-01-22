var textSizeSlider = document.getElementById('textSizeSlider');
var textSizeValue = document.getElementById('textSizeValue');
var textArea = document.getElementById('resizableText');

textSizeSlider.addEventListener('input', function () {
    var newSize = textSizeSlider.value;
    textArea.style.fontSize = newSize + 'px';
    textSizeValue.textContent = newSize;
});
