import analyzer from './analyzer.js';

//limpiar caja de texto con un event listener
const caja = document.querySelector("[name='user-input']");
const borrar = document.querySelector("#reset-button");

borrar.addEventListener("click", function() {
  document.querySelector("#contador").innerHTML = "0";
  document.querySelector("#contador2").innerHTML = "0";
  document.querySelector("#contador3").innerHTML = "0";
  document.querySelector("#contador4").innerHTML = "0";
  document.querySelector("#contador5").innerHTML = "0";
  caja.value = "";
});

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
  const numeros23 = analyzer.getNumbersSum(text);
  document.querySelector("#contador5").innerHTML = numeros23;
});


const longitud = document.querySelector("[name='user-input']");
longitud.addEventListener("keyup", () => {
  const text = longitud.value;
  const nume = analyzer.getAverageWordLength(text);
  document.querySelector("#contador6").innerHTML = nume;
});

