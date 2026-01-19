var http=require("http")
console.log("module ok")
http.createServer((req,res)=>{
    res.end("welcome to http server")
}).listen(2046)  //any number you can give 
console.log("port listening..2046")