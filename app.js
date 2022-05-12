let inputEl = document.getElementById("input-encriptador");
let ouput = document.getElementById("input--copy");

/*function messageEncriptado() {
  let encriptado = encriptar();
  ouput.value = encriptado;
  inputEl.value = "";
}
function messageDesencriptado() {
  let desencriptado = desencriptar();
  ouput.value = desencriptado;
  inputEl.value = "";
}*/

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
