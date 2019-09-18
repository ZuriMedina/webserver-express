//Código escrito nativamente en javascript para configurar el server con Node
//Usando Express, esto no es necesario.
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Contect-Type': 'application/json'});

        let salida = {
            nombre: 'Zuri',
            edad: 29,
            url: req.url
        }

        res.write(JSON.stringify(salida));
    //response.write('Hola Mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto 8080');