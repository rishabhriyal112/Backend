const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); //Request Object

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text / html'); //Sending Response  
        res.write('<html>');
        res.write('<head><title>Server</title></head>');
        res.write('<body>Enter Your Details');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter Your Name"/> <br>');
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        res.write('<label for="male">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" /><br>');
        res.write('<input type="submit" value="submit" />')
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url.toLowerCase() === "/submit-details" && req.method == 'POST') {
        fs.writeFileSync('user.txt', 'Rishabh');
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }

    res.setHeader('Content-Type', 'text / html'); //Sending Response  
    res.write('<html>');
    res.write('<head><title>Server</title></head>');
    res.write('<body>Welcome</body>');
    res.write('</html>');
    return res.end();

})

const PORT = 3000;
server.listen(PORT , ()=>{
    console.log(`Server Running on address http://localhost:${PORT}`);
})
