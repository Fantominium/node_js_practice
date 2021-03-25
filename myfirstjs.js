var http = require("http")
var dateVar = require('./myFirstNodeModule')
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write('You typed in the url : '+req.url+'<br/>');
    res.write('Hellow Node Js, my first module is a date one that givves back: ' + dateVar.myDateTime())
    res.end()
}).listen(8081)