
const analyzer = {
  getWordCount(text) {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const letras = text.trim().split(" "); //trim se usa para los espacio y split se usa para dividir la cadena en palabras

    let palabras = 0; //almacena las palabras

    //este for recorre las palabras, y las almacena en letra cuando pasa la condicion de if
    for (const letra of letras) {
      if (letra.match(/^[a-zA-Z]+$/)) {
        palabras++;//incrementa el contador si la palabra es valida
      }
    }
    return palabras;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let caracteres = 0; //declara la variable y le pone 0

    for (let i = 0; i < text.length; i++) {//inicia el contador y se incrementa hasta llegar al final
      caracteres++;//esta incrementa el resultado
    }

    return caracteres; //devuelve el valor de la variable

  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characters = text.split("");
    let characterCount = 0;

    for (const character of characters) {
      if (!character.match(/\W/g)) {
        characterCount++;
      }
    }

    return characterCount;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.trim().split(" ");
    let cantidadPalabras = 0;
    let longitudTotal = 0;
    for (const palabra of palabras) {
      if (palabra.match(/\w+/)) {
        cantidadPalabras++;
        longitudTotal += palabra.length;
      }
    }

    const numeroString = parseFloat(longitudTotal / cantidadPalabras).toPrecision(3);
    const numero = Number(numeroString);
    return numero;
  },


  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.trim().split(" ");
    let numerocontador = 0;

    for (const numero of numeros) {
      if (numero.match(/^[0-9]+(\.[0-9]+)?$/) !== null) {
        numerocontador++;
      }
    }

    return numerocontador;
  },

  getNumberSum: (text) => {
    const numeros = text.trim().split(" ");
    const num = numeros.filter((numero) => {
      return numero.match(/^[0-9]+(\.[0-9]+)?$/) !== null;
    });

    let total = 0;

    for (const numero of num) {
      total += parseFloat(numero);
    }

    return total
  },

};



export default analyzer;