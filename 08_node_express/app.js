//External Module
const express = require('express')

//Local Module
const userRequestHandler = require('./user')

const app = express();

app.use("/" , (req , res , next)=>{
    console.log("Came in First Middleware" , req.url , req.method);
    next();
})

app.post("/submit-details",(req , res , next) =>{
    console.log("Came in second Middleware" , req.url , req.method);
    res.send('<p>Welcome to Complete Coding Nodejs</p>')
})

app.use("/" , (req , res , next)=>{
    console.log("Came in another Middleware" , req.url , req.method);
    res.send("Came from another middleware")
    next();
})

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`Server Running on address http://localhost:${PORT}`);
});
