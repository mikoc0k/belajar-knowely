let priseden = 'jokouwee';

for (let i=0; i<=priseden.length-1;i++){
    console.log(priseden[i]);
}

// reverse order
for (let i=priseden.length-1; i>=0;i--){
    console.log(priseden[i]);
}

// iterasi tanpa index menggunakan of
for (let char of priseden){
    console.log(char);
}

// menghitung spaces pada kalimat
let yapping = 'wi wol de tok not onli tok de tok';
let spaces = 0;

for (let char of yapping){
    if (char === ' '){
        spaces++;
    }
}

console.log(spaces);

//mengganti karakter tertentu
let statement = 'ini adalah itu';
let jeda = '';
for (let i=0; i<=statement.length-1;i++){
if (statement[i] === ' '){
    jeda +='-'
} else{
    jeda += statement[i];
}
}
console.log(jeda);

// alternatif dengan for of
function replaceAll(input,char,replacement){
let blank = '';
for (let teks of input){
    if (teks === char){
        blank += replacement;
    } else{
        blank += teks;
    }
}
return blank;
}
let kalimatUji = 'ini adalah ANU';
console.log(replaceAll(kalimatUji,' ','-'));

// hapus karakter tertentu
const coba = 'menggunakan strings';
let hapus = '';
for (let char of coba){
    if (char !== ' '){
        hapus += char;
    }
}
console.log(hapus);

// cetak string terbalik
let presiden = 'praowo';
let kebalik = '';
for (let i = presiden.length-1; i>=0; i--){
    kebalik += presiden[i];
}
console.log(kebalik);

// alternatif 
let makanan = 'nasi goreng';

let kebolak = '';
let kebilak = '';
for (let each of makanan){
    kebolak = each + kebolak; // kunci terbalik
}
for (let each of makanan){
    kebilak = kebilak + each; // pembanding
}
console.log(kebolak);
console.log(kebilak);