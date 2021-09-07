var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end(`var no = 6;
        if(no%2==0){
            console.log( "Given No " + no + " is Even ");
        }
        else{
            console.log( "Given No " + no + " is Odd ");
        }`);
}).listen(3000);
console.log("server start at http://127.0.0.1:8081/");
    
    
    