const { log } = require('console')
const fs = require('fs')

console.log("Hello")

fs.writeFile("output.txt","Writing File",(err)=>{
  if(err) console.log("Error Occurred");
  else console.log("File Written Successfully");
})


