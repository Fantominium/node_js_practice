var http = require("http")
var fs = require('fs')

var dateVar = require('./myFirstNodeModule')


http.createServer(function(req, res){
    fs.readFile('demo.html',function (err, data){
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.appendFile('myFirstNodeJsCreatedFile.txt', req.url, function (error){
            if (error) throw error
            console.log("saved")
        });
        res.write('Hellow Node Js, my first module is a date one that givves back: ' + dateVar.myDateTime())
        res.write(data)
        res.end()
    })
}).listen(8081)