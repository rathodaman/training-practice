var fs = require('fs');
fs.writeFile('test.txt','hello world',function (err){
    if(err) throw err;
    console.log("file created");
});