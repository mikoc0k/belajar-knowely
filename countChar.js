function countLetters(input) {
let counter = 0;
for (let char of input){
  if (char.toLowerCase() !== char.toUpperCase()){
    counter +=1;
  }
}
return counter;
}

console.log(countLetters("jemb0000t"));