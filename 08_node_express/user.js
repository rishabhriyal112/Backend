const { error } = require('console');
const fs = require('fs');

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method); //Request Object

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
        const body = [];
        req.on("data", (chunk) => { //Reading Chunks
            console.log(chunk);
            body.push(chunk);
        })

        req.on("end", () => { //Buffering Chunks
            const fullBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullBody);
            // const bodyObject = {};
            // for(const [key,val] of params.entries()){
            //     bodyObject[key] = val ;
            // }
            const bodyObject = Object.fromEntries(params)
            console.log(bodyObject);
            fs.writeFile('user.txt', JSON.stringify(bodyObject), error => {
                console.log("Data Written Successfully");
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })


    }

    else {
        res.setHeader('Content-Type', 'text / html'); //Sending Response  
        res.write('<html>');
        res.write('<head><title>Server</title></head>');
        res.write('<body>Welcome</body>');
        res.write('</html>');
        return res.end();
    }

}

module.exports = userRequestHandler;
