var fs = require('fs');
var data =fs.readFileSync('demo.html');
    console.log("Synchornus Read:" + data.toString());
    console.log("Program Ended");
