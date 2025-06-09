let teks1 = "Jokowi Ngentot Bahlil Asu";

// pisah karakter string ke array
let teks1PisahArrays = teks1.split(" "); //split per spasi
console.log(teks1PisahArrays);

let teks1PisahArraysKar = teks1.split("o"); //split per karakter
console.log(teks1PisahArraysKar);

// Memfilter element array
let words = teks1.split(" ");

function getShortWords(words,maxLen){
    let hasil =[];
    for (const word of words) {
        if (word.length < maxLen) {
            hasil.push(word);
        }
    }
    return hasil;
}
console.log(getShortWords(words,5));
let jancok = "jokowi asu esemka ghoib"; // sebenarnya tidak bisa menggunakan fungsi getShortWords karena bukan array
console.log(getShortWords(jancok,4)); // sebaiknya dijadikan array dulu

// perbaikan pada fungsi getShortWords

function getShortWordNew(texts,maxLen){
let newTexts = texts.split(" ");
let hasil =[];
for (const word of newTexts) {
    if (word.length < maxLen) {
    hasil.push(word);
    }
}
return hasil;
}
console.log(getShortWordNew(jancok,6));

// membuat array baru dari yang sudah ada
// menghitung panjang karakter elemen array

let arrayJancok = ["jokowi","asu","esemka","ghoib"];
function getWordLength(texts){ 
const hasil = [];
for (const text of texts) {
    hasil.push(text.length);
}
return hasil;
}

console.log(getWordLength(arrayJancok));

// menggabungkan array menjadi string
const pruits = ["apel", "benana", "jagung", "pisang"];
const joinPruits = pruits.join(" "); // menjoinkan elemen array dengan pemisahnya adalah space
const joinPruitsStrip = pruits.join("-");
console.log(joinPruits);
console.log(joinPruitsStrip);


// mencari elemen dalam array
console.log(pruits.includes("apel")); // true
console.log(pruits.indexOf("apel")); // index 0
console.log(pruits.includes("jembod")); // false
console.log(pruits.indexOf("jembod")); // index -1 alias not found
