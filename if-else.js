function checkWordLength(word) {
  if (word.length < 5){
    console.log(`${word} is a short word`);
  } else {
    console.log(`${word} is a long word`);
  }
}

checkWordLength("kontol");

// contoh early return / guard clauses di javascript hanya menggunakan if
// memanfaatkan return
// blok if akan berhenti ketika kondisi true karena return nilai
// jika false maka lanjut ke blok berikutnya sampe true

function getGreeting(age) {
  if (age >= 18) {
    return 'Hello!';
  }

  if (age > 7) {
    return 'Hi!';
  }

  if (age > 3) {
    return 'Hi, kid!';
  }

  return 'Hi, toddler!';
}

let greeting = getGreeting(6);

console.log(greeting); // Hi, kid! will appear in the console
