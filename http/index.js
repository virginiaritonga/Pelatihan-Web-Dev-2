const http = require('http');
const server = http.createServer((req, res ) => {
    // res.writeHead(200, {'Content-Type' : 'text/html'})
    // res.write("hello world");
    // res.end();
    
});

server.listen(8000, () => {
    console.log("Listening at port 8000")
})