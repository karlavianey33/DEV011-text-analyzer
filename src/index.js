import analyzer from './analyzer.js';

//limpiar caja de texto con un event listener
const borrar = document.getElementById("reset-button");
const caja = document.querySelector("[name='user-input']");


borrar.addEventListener("click", function() {
  document.querySelector("span.my-word-count").innerHTML = "0";
  document.querySelector("span.my-character-count").innerHTML = "0";
  document.querySelector("span.my-character-no-spaces-count").innerHTML = "0";
  document.querySelector("span.my-number-count").innerHTML = "0";
  document.querySelector("span.my-number-sum").innerHTML = "0";
  document.querySelector("span.my-word-length-average").innerHTML = "0";
  caja.value = "";
});

//titulo de bienvenida

const tituloBienvenida = document.querySelector("h3.titulo-bienvenida");


tituloBienvenida.addEventListener("click", function() {
  tituloBienvenida.style.display = "none";
  document.body.style.opacity = 1;
  document.querySelector("button").style.opacity = 1;
  document.querySelector("textarea[name='user-input']").style.opacity = 1;
  document.querySelector("h1").style.opacity = 1;document.querySelector(".my-character-count").style.opacity = 1;
  document.querySelector("h2").style.opacity = 0;
});

function mostrarElementos() {
  const elementos = document.querySelectorAll("li.my-character-count, li.my-character-no-spaces-count, li.my-word-count, li.my-number-count, li.my-number-sum, li.my-word-length-average,span.my-character-count, span.my-character-no-spaces-count, span.my-word-count, span.my-number-count, span.my-number-sum, span.my-word-length-average,footer ");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.opacity = 1;
  }
}

document.querySelector("h3.titulo-bienvenida").addEventListener("click", mostrarElementos);


//llamemos la primera funcion 
const primera = document.querySelector("[name='user-input']");

primera.addEventListener("input", () => {
  const text = document.querySelector("[name='user-input']").value;
  const wordCount = analyzer.getWordCount(text);


  // Actualiza el contenido del SPAN
  document.querySelector("span.my-word-count").innerHTML = wordCount;
  
});

//segunda funcion 

document.querySelector("[name='user-input']").addEventListener("input", () => {
  const text = document.querySelector("[name='user-input']").value;
  const caracteres = analyzer.getCharacterCount(text);
  document.querySelector("span.my-character-count").innerHTML = caracteres;
  
});

//tercera funcion
const sin_espacios = document.querySelector("[name='user-input']");

sin_espacios.addEventListener("keyup", () => {
  const text = sin_espacios.value;
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector("span.my-character-no-spaces-count").innerHTML =
    characterCountExcludingSpaces;
});

//cuarta FUNCION
const numeros = document.querySelector("[name='user-input']");

numeros.addEventListener("keyup", () => {
  const text = numeros.value;
  const numeros2 = analyzer.getNumberCount(text);
  document.querySelector("span.my-number-count").innerHTML = numeros2;
});

//quinta funcion
const numeros3 = document.querySelector("[name='user-input']");
numeros3.addEventListener("keyup", () => {
  const text = numeros3.value;
  const numeros23 = analyzer.getNumberSum(text);
  document.querySelector("span.my-number-sum").innerHTML = numeros23;
});


const longitud = document.querySelector("[name='user-input']");
longitud.addEventListener("keyup", () => {
  const text = longitud.value;
  const nume = analyzer.getAverageWordLength(text);
  document.querySelector("span.my-word-length-average").innerHTML = nume;
});

