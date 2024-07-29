document.addEventListener("DOMContentLoaded", function () {
  const text = "Константин Савченко";
  const textElement = document.getElementById("animated-text");
  const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");

  let displayText = "";
  let index = 0;

  function animateText() {
    if (index < text.length) {
      let currentChar = text[index];
      let charIndex = 0;
      let interval = setInterval(() => {
        if (charIndex < alphabet.length) {
          textElement.innerHTML =
            displayText + `<span class="letter">${alphabet[charIndex]}</span>`;
          setTimeout(() => {
            textElement.querySelector(".letter").style.opacity = 1;
          }, 0);
          charIndex++;
        } else {
          clearInterval(interval);
          displayText += currentChar;
          textElement.innerHTML = displayText
            .split("")
            .map((char) => `<span class="letter">${char}</span>`)
            .join("");
          index++;
          setTimeout(animateText, 50); // Задержка перед следующей буквой
        }
      }, 50); // Скорость перебора алфавита
    }
  }

  animateText();
});
