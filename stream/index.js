const fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8'); 
readStream.on('data', (chunk) => {
    console.log(chunk);
});