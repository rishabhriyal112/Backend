const http =require('http');
const userRequestHandler = require('./user');

const server = http.createServer(userRequestHandler);

const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`Server Running on address http://localhost:${PORT}`);
})
