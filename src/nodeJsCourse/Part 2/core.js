// Gloabal Node Modules
const path = require("path");
const util = require("util");
const v8 = require("v8");

//demonstrating path module
const uploadsPath = path.join(__dirname, 'uploads');
console.log(uploadsPath);

//demonstrating util logging -- more powerful than console.log
util.log( path.basename(__filename) );
util.log("^ current file");

//demonstrating v8
util.log(v8.getHeapStatistics());