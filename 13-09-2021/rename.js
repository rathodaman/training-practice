var fs = require('fs');
fs.rename('test1.txt','test.txt',function (err){
    if(err) throw err;
    console.log("file Renamed");
});