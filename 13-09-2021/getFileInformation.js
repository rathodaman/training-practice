var fs = require('fs');
fs.stat('test.txt', function(err , stats){
    if(err)
    {
        return console.error(err);
    }
    //check file information
    console.log(stats);
    //check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ?" + stats.isDirectory());
    //console.log(__filename);
    //console.log(__dirname);
});
    