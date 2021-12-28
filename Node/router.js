function route(handle, pathname, response, dataPosteada){
    console.log("Ruteando petición a " + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response, dataPosteada);
    }
    else {
        console.log("No se encontro handler para " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No encontrado");
        response.end();
    }
}
exports.route = route;