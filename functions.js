export function capitalize(word) {
  return word.at(0).toUpperCase() + word.slice(1);
}

export function reverse(word) {
  return word.split("").reverse().join("");
}

export const calculator = {
  add: (a, b) => parseFloat((a + b).toFixed(2)),
  sub: (a, b) => parseFloat((a - b).toFixed(2)),
  div: (a, b) => parseFloat((a / b).toFixed(2)),
  mul: (a, b) => parseFloat((a * b).toFixed(2)),
};

export function caesarCipher(string, shift) {
  const regex = /^[a-zA-Z]+$/;

  const isAlphabet = (letter) => regex.test(letter);
  const isCapitalLetter = (letter) => {
    letter.charCodeAt() <= 90 && letter.charCodeAt() >= 65;
  };

  let stringArray = string.split("");

  stringArray.forEach((letter, index) => {
    if (isAlphabet(letter)) {
      let shiftedCharCode = letter.charCodeAt() + shift;
      if (isCapitalLetter(letter)) {
        let capitalA = "A".charCodeAt();
        let n = (shiftedCharCode - capitalA) % 26;
        stringArray[index] = String.fromCharCode(n + capitalA);
      } else {
        let small_a = "a".charCodeAt();
        let n = (shiftedCharCode - small_a) % 26;
        stringArray[index] = String.fromCharCode(n + small_a);
      }
    }
  });

  return stringArray.join("");
}

export function analyseArray(arrayOfNums) {
  const totalNum = arrayOfNums.reduce((acc, cur) => acc + cur, 0);
  const average = totalNum / arrayOfNums.length;

  const obj = {
    average,
    min: Math.min(...arrayOfNums),
    max: Math.max(...arrayOfNums),
    length: arrayOfNums.length,
  };

  return obj;
}
