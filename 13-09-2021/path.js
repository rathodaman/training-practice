var path = require("path");
// Normalization
console.log('normalization : ' + path.normalize('/akash/..'));
// Join
console.log('joint path : ' + path.join('/test', 'technolabs', 'node/newfolder', 'tab', '..'));
// Resolve
console.log('resolve : ' + path.resolve('path_example.js'));
// Extension
console.log('ext name: ' + path.extname('path_example.js'));

console.log('ext name: ' + path.dirname('demo.html'));