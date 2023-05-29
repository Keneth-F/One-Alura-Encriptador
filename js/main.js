const encriptador = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
/*
Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/
const mensaje = document.querySelector("#texto");
const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const copiar = document.querySelector("#copiar");
const salida = document.querySelector("p");
encriptar.addEventListener("click", encriptación);
desencriptar.addEventListener("click", desencriptacion);
copiar.addEventListener("click", copiarTexto);

function encriptación(evento) {
  let resultado;
  for (const letra of mensaje.value) {
    resultado = mensaje.value.replaceAll(letra, encriptador[letra] ?? letra);
  }
  salida.textContent = resultado;
}
function desencriptacion(evento) {
  let resultado=mensaje.value;
  for (const letra in encriptador) {
      resultado = resultado.replaceAll(encriptador[letra], letra);
  }
  salida.textContent = resultado;
}

function copiarTexto(evento) {
  navigator.clipboard.writeText(salida.textContent)
}