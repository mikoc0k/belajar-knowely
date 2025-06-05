function restoreSpaces(input) {
return input.replaceAll("-"," ");
}

console.log(restoreSpaces("jembut-ireng-mulyono"));

function isSubstring(phrase, part) {
  return phrase.includes(part);
}

console.log(isSubstring("mulyono anak haram konstitusi", "ono"));

function getPosition(text, word) {
return text.indexOf(word);
}

console.log(getPosition("mulyono anak haram konstitusi", "anak"));  