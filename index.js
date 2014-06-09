// this allows us to run our server by typing "node index.js" at the cmd prompt
var server = require("./server");
var router = require("./router");
server.start(router.route);
