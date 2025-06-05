function countMs(text) {
let counter = 0;
for (let obj of text){
  if (obj === "M" || obj === "m"){
    counter +=1;
  }
}
return `huruf M/ m muncul sebanyak ${counter} kali`
}

console.log(countMs("jembotM"));