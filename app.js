let inputEl = document.getElementById("input-encriptador");
let ouput = document.getElementById("input--copy");

function encriptar() {
  let entrada = inputEl.value;
  let wordMinuscula = entrada.toLowerCase();

  for (let i = 0; i < 5; i++) {
    let vocals = ["a", "e", "i", "o", "u"];
    let words = ["ai", "enter", "imes", "ober", "ufac"];

    if (wordMinuscula.includes(vocals[i])) {
      wordMinuscula = wordMinuscula.replaceAll(vocals[i], words[i]);
    }
  }
}

function mostrarMessage() {}
