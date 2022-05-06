var encriptador = document.getElementById("input-encriptador").value;
var copy = document.getElementById("inputn--copy").value;

var wordEncriptado;

encriptador.tolowercase();

let vocals = ["a", "e", "i", "o", "u"];

for (let i = 0; 0 < vocals.length; i++) {
  let words = ["ai", "enter", "imes", "ober", "ufac"];

  if (encriptador.includes(vocals[i])) {
    wordEncriptado = encriptador.replaceAll([i], words[i]);
  }
}

console.log(wordEncriptado);
