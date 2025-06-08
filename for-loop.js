function sumFromTo(min,max){
  let sum=0;
  for (let i=min; i<=max; i++){
    sum +=i;
  }
  return sum;
}

console.log(sumFromTo(1,4));