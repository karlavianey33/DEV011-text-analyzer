
const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(" ");
    return words.filter(word => {
      // Comprobamos si la palabra está formada solo por letras.
      return word.match(/^[a-zA-Z]+$/);
    }).length
  
  },
    
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
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
    const cantidadPalabras = palabras.length;
    const longitudTotal = palabras.reduce((a, b) => a + b.length, 0);
    return longitudTotal / cantidadPalabras;
  },

  
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.split("");
    let numberCount = 0;

    for (const number of numbers) {
      if (number.match(/[0-9]/) !== null) {
        numberCount++;
      }
    }

    return numberCount;
    
  },
  

  getNumbersSum:  (text) => {
    const numbers = text.split("");
    const numbersArray = numbers.filter((number) => {
      return number.match(/[0-9]/) !== null;
    });

    let total = 0;

    numbersArray.forEach((number) => {
      total += parseFloat(number);
    });

    return total;

  },

};



export default analyzer;

