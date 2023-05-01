var fs = require('fs');
var http = require('http');
var server = http.createServer((req,res)=>{
      if(req.url == "/" || req.url =="/home"){
         fs.readFile('./public/home.html',(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
         });
      }else if(req.url == "/about"){
         fs.readFile('./public/about.html',(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
         });
      }else if(req.url == "/contact"){
         fs.readFile('./public/contact.html',(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
         });
      }else{
         fs.readFile('./public/404.html',(error,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
         });
      }
});

server.listen(3000);
console.log("Server Run Success");
