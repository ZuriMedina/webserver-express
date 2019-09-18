const hbs = require('hbs')

//Crear propiedades que puedan ser usadas por todos los componentes
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalize', (texto) => {
    let palabras = texto.split(' ')
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })
    return palabras.join(' ')
})