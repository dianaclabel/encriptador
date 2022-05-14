let inputEl = document.getElementById("input-encriptador");
let ouput = document.getElementById("input--copy");
let ouputImage = document.getElementById("input--img");
let btnCopy = document.getElementById("button--copy");

function mostrarImage() {
  if (ouputImage.style.display === "none") {
    ouputImage.style.display = "flex";
  } else {
    ouputImage.style.display = "none";
    btnCopy.style.display = "inline-block";
    ouput.style.display = "inline-block";
  }
}

function encriptar() {
  let entrada = inputEl.value;
  let wordMinuscula = entrada.toLowerCase();

  for (let i = 0; i < 5; i++) {
    let vocals = ["e", "i", "a", "o", "u"];
    let words = ["enter", "imes", "ai", "ober", "ufac"];

    if (wordMinuscula.includes(vocals[i])) {
      wordMinuscula = wordMinuscula.replaceAll(vocals[i], words[i]);
    }
  }
  mostrarImage();
  ouput.value = wordMinuscula;
  inputEl.value = "";
}

function desencriptar() {
  let entrada = inputEl.value;
  let wordMinuscula = entrada.toLowerCase();

  for (let i = 0; i < 5; i++) {
    let vocals = ["a", "e", "i", "o", "u"];
    let words = ["ai", "enter", "imes", "ober", "ufac"];

    if (wordMinuscula.includes(words[i])) {
      wordMinuscula = wordMinuscula.replaceAll(words[i], vocals[i]);
    }
  }

  ouput.value = wordMinuscula;
  inputEl.value = "";
}

function copy() {
  ouput.select();
  document.execCommand("copy");
}
