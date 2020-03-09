const fs = require('fs');

// // synchronous write
// fs.writeFileSync("writeSync.txt","halo dunia");

// console.log("Sudah selesai");

// // asynchronous write
// fs.writeFile("writeAsync.txt","halo dunia", (err) => {
//     if (err) throw err;
// });
// console.log("ini gaperlu selesai buat jalan");

// synchronous read
var text = fs.readFileSync("readme.txt", 'utf8');
console.log(text);