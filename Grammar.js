
function grammar(){
  const S = ["1U", "1", "0Z"];
  const U = ["1T", "0Z"];
  const T = ["1", "1U", "0Z"];
  const Z = ["0", "B", "0S"];
  const B = ["1U", "1"];
  
  let string = "S";
  let currentChar;
  let array;
  
  while (/[a-zA-Z]/.test(string[string.length - 1])) {
    currentChar = string[string.length - 1];
// Reemplazar las sentencias if por un switch
switch (currentChar) {
  case "U":
    array = U;
    break;
  case "T":
    array = T;
    break;
  case "Z":
    array = Z;
    break;
  case "B":
    array = B;
    break;
  case "S":
    array = S;
    break;
  default:
    break;
}

    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
  
    // Reemplazar la letra mayúscula por una gramatica
    let arrayString = string.split("");
    arrayString.splice(arrayString.length - 1, 1, randomElement);
    string = arrayString.join("");
  }
  return string;
}

module.exports = grammar;