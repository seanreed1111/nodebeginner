var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+ pathname + " received");

		route(pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World2");
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