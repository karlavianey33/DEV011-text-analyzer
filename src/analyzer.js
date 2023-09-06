
const analyzer = {   
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ");
    let count = 0;

    for (const word of words) {
      if (word.match(/\S+/)) {
        count++;
      }
    }
    return count;
  
  },
  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      count++;
    }
  
    return count;
    
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
    const numbers = text.trim().split(" ");
    let numberCount = 0;

    for (const number of numbers) {
      if (number.match(/^[0-9]+(\.[0-9]+)?$/) !== null) {
        numberCount++;
      }
    }

    return numberCount;
  },

  getNumberSum:  (text) => {
    const numbers = text.trim().split(" ");
    const numbersArray = numbers.filter((number) => {
      return number.match(/^[0-9]+(\.[0-9]+)?$/) !== null;
    });

    let total = 0;

    for (const number of numbersArray) {
      total += parseFloat(number);
    }

    return total
  },

};



export default analyzer;