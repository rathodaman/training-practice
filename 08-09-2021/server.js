var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>hello aman how are you</h1>");
}).listen(3000);
console.log("server started at http://127.0.0.1");