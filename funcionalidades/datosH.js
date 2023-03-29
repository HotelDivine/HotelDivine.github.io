let fs = require('fs');
let dato = fs.readFileSync('./habitaciones.json', 'utf8');
let objJson = JSON.parse(dato)

module.exports = objJson;