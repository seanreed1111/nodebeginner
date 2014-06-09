var http = require("http");

function start() {
	function onRequest(request, response) {
		console.log("Request Received");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("server has started2");
}
module.exports.start = start;



// Can also create server using anonymous functions, before you 
//put it into a module

//var http = require("http");
//http.createServer(function(request, response) {
//	console.log("server has started2");
//	response.writeHead(200,{"Content-Type": "text/plain"});
//	response.write("Hello World");
//	response.end();
// }).listen(8888);
//console.log("server has started");