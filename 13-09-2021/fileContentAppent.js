var fs = require('fs');
fs.appendFile('test.txt','hello Node Js!',function (err){
    if(err) throw err;
    console.log("file content Updated");
});