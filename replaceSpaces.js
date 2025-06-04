function replaceSpaces(input) {
  let result = "";

  // Write code here
  for (let huruf of input){
    if (huruf === " "){
      result += "-" ;
    } else {
      result += huruf;
    }
   }
  return result;
}

console.log(replaceSpaces('jancok joko wi'));
console.log(replaceSpaces('prabowojancok'));