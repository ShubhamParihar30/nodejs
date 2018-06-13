var url=require('url')
var querystring=require('querystring')
var http=require('http')

http.createServer(function(req,res){
   var para=querystring.parse(url.parse(req.url).query);
   res.writeHead(200,{"Content-type":"text/plain"})
   res.write(" name: "+para['name'] +" email: "+ para['email'])
   res.end();
}).listen(8080)
