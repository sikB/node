var http = require('http');
var fs = require('fs'); //includes the file system module

function renderHomePage(req, res){
	res.writeHead(200,{'content-type': 'text/html'});
	var homePageHTML = fs.readFileSync('homePageHTML.html');
	res.write(homePageHTML);
	res.end();
}
function render404Page(request, response){
	response.writeHead(404);
	var fourOhfourPage = fs.readFileSync('fourOhfourPage.html');
	response.end(fourOhfourPage);
}

var server = http.createServer(function(request, response){
	// console.log(request.url);
	if(request.url== '/'){
		renderHomePage(request, response);
	}else{
		render404Page(request, response);
		// response.writeHead(404,{'content-type': 'text/html'});
		// response.write('<h1>404 error Page doesnt exist fool!!</h1>');
		// response.end();
	}
	response.end();
});

server.listen(8000);
console.log("Our server is listening on port 8000");