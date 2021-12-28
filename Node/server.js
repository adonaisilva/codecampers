// modulo para crear servidor node
var http = require("http");
var url = require("url")

function iniciar(route, handle) {
    //request listener function requestListener(request, response)
    function onRequest(request, response) {
        var dataPosteada = "";
        var pathname = url.parse(request.url).pathname
        console.log("Petición para " + pathname + " recibida.");
        request.setEncoding("utf8");
        request.addListener ("data", function(trozoPosteado){
            dataPosteada += trozoPosteado;
            console.log("Recibido trozo POST '" + trozoPosteado + "'.");
        });
        request.addListener("end", function(){
            route(handle, pathname, response, dataPosteada);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
// puede mostrar 2 veces el log ya que el browser puede pedir el favicon antes de cargar la página
