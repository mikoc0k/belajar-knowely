function replaceA(input) {
  let template = '';
for (let huruf of input){
  if (huruf === "a" || huruf === "A"){
    template += "*" ;
  } else {
    template += huruf;
  }
}
return template;
}

console.log(replaceA('jokowi jancok'));