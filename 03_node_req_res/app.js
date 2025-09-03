const http = require('http');

const server = http.createServer((req , res) =>{
    console.log(req.url , req.method , req.headers); //Request Object

    if(req.url === '/'){
    res.setHeader('Content-Type','text / html'); //Sending Response  
    res.write('<html>');                                         
    res.write('<head><title>Server</title></head>');
    res.write('<body>Welcome to home</body>');
    res.write('</html>');
    return res.end();
    }
    else if(req.url  === '/products'){
    res.setHeader('Content-Type','text / html'); //Sending Response  
    res.write('<html>');                                         
    res.write('<head><title>Server</title></head>');
    res.write('<body>Checkout our Products</body>');
    res.write('</html>');
    return res.end();
    }
    
    res.setHeader('Content-Type','text / html'); //Sending Response  
    res.write('<html>');                                         
    res.write('<head><title>Server</title></head>');
    res.write('<body>Error 404</body>');
    res.write('</html>');
    return res.end();
    
})

const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})
