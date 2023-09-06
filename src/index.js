import analyzer from './analyzer.js';

//limpiar caja de texto con un event listener
const caja = document.querySelector("[name='user-input']");
const borrar = document.getElementById("reset-button");

borrar.addEventListener("click", function() {
  document.querySelector("#contador").innerHTML = "0";
  document.querySelector("#contador2").innerHTML = "0";
  document.querySelector("#contador3").innerHTML = "0";
  document.querySelector("#contador4").innerHTML = "0";
  document.querySelector("#contador5").innerHTML = "0";
  document.querySelector("#contador6").innerHTML = "0";
  caja.value = "";
});

//titulo de bienvenida

const tituloBienvenida = document.querySelector(".titulo-bienvenida");


tituloBienvenida.addEventListener("click", function() {
  tituloBienvenida.style.display = "none";
  document.body.style.opacity = 1;
  document.querySelector("button").style.opacity = 1;
  document.querySelector("textarea[name='user-input']").style.opacity = 1;
  document.querySelector("h1").style.opacity = 1;document.querySelector(".my-character-count").style.opacity = 1;
  
});

function mostrarElementos() {
  const elementos = document.querySelectorAll(".my-character-count, .my-character-no-spaces-count, .my-word-count, .my-number-count, .my-number-sum, .my-word-length-average, span");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 1;
  }
}

document.querySelector(".titulo-bienvenida").addEventListener("click", mostrarElementos);


//llamemos la primera funcion 
const primera = document.querySelector("[name='user-input']");
primera.addEventListener("input", () => {
  const text = document.querySelector("[name='user-input']").value;
  const wordCount = analyzer.getWordCount(text);
  document.querySelector("#contador").innerHTML = wordCount;
  
});

//segunda funcion 
document.querySelector("[name='user-input']").addEventListener("input", () => {
  const text = document.querySelector("[name='user-input']").value;
  const caracteres = analyzer.getCharacterCount(text);
  document.querySelector("#contador2").innerHTML = caracteres;
  
});

//tercera funcion
const sin_espacios = document.querySelector("[name='user-input']");

sin_espacios.addEventListener("keyup", () => {
  const text = sin_espacios.value;
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector("#contador3").innerHTML =
    characterCountExcludingSpaces;
});

//cuarta FUNCION
const numeros = document.querySelector("[name='user-input']");

numeros.addEventListener("keyup", () => {
  const text = numeros.value;
  const numeros2 = analyzer.getNumberCount(text);
  document.querySelector("#contador4").innerHTML = numeros2;
});

//quinta funcion
const numeros3 = document.querySelector("[name='user-input']");
numeros3.addEventListener("keyup", () => {
  const text = numeros3.value;
  const numeros23 = analyzer.getNumberSum(text);
  document.querySelector("#contador5").innerHTML = numeros23;
});


const longitud = document.querySelector("[name='user-input']");
longitud.addEventListener("keyup", () => {
  const text = longitud.value;
  const nume = analyzer.getAverageWordLength(text);
  document.querySelector("#contador6").innerHTML = nume;
});

