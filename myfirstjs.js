var http = require("http")
var fs = require('fs')
var url = require('url')
var dateVar = require('./myFirstNodeModule')
var events = require('events')
var eventEmitter = new events.EventEmitter()

var myEventHandler = () => {
    console.log('Scream if you wish!')
}
eventEmitter.on('scream', myEventHandler)
eventEmitter.emit('scream')


http.createServer(function(req, res){
    var q = url.parse(req.url, true)
    var filename = '.' + q.pathname

    fs.readFile(filename,function (err, data){
        if (err) {
            res.writeHead(400, {'Content-type': 'text/html'})
            return res.end('404 not found for ' + req.url)
        }
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.appendFile('myFirstNodeJsCreatedFile.txt', req.url, function (error){
            if (error) throw error
            console.log("saved")
        });
        res.write('Hellow Node Js, my first module is a date one that gives back: ' + dateVar.myDateTime())
        res.write(data)
        res.end()
    })
}).listen(8081)