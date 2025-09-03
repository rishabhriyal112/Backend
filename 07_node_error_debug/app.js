const testingSyntax = require('./syntax')
const http = require('http');

const server = http.createServer((req , res)=>{
    console.log(req.url , req.method);
    testingSyntax();
});

const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`Server Running on address http://localhost:${PORT}`);
});
