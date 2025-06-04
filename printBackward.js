function printBackwards(input, start, end) {
  for (let i = end; i > start-1 ; i--){
    console.log(input[i]);
  }
}

printBackwards('javascript',2,6); // -> 'r', 'c', 'S', 'a', 'v'