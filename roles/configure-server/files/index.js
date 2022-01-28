var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello world!\n Failures breeds quality success\n#Wach");
});
server.listen(3000);