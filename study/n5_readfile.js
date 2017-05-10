/**
 * Created by Simon on 2017/3/24.
 */
//-----------n5_readfile-------------------------
var  http  =  require('http');
var  url = require('url');
var  router = require('./router');
var  optfile  =  require('./models/optfile');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2次访问
        //optfile.readfileSync('./views/login.html');
        function recall(data) {
            response.write(data);
            response.end('ok');
        }
        optfile.readfile('./views/login.html',recall);
        console.log('主程序执行完毕');
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');