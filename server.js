const express = require('express')
const app = express()
const hbs = require('hbs');
//Importar el arichivo Helpers
require('./hbs/helpers')
//Acceder a la variable de entorno de Heroku para desplegar la app
const port = process.env.PORT || 3000

//aquí se especifica la locacización de la capeta public donde ira almacenado
//todo el contenido de la web
app.use(express.static(__dirname + '/public'))

//Express HBS engine
//Aquí se almacenas los distintos componentes que seran renderizados
hbs.registerPartials(__dirname + '/views/partials')

//hacer referencia a la carpeta "views"
app.set('view engine', 'hbs')

//Se pueden asignar valores a propiedades que seran usados por el archivo HTMl
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'zuri'
    })
})
//About
app.get('/about', (req, res) => {
    res.render('about')
})
//"port" hace referencia a la variable de entorno de Heroku
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`)
})

// Comando para ejecutar el server y todas las subcarpeta en consola nodemon server -e js,hbs,html,css