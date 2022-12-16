const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) => {

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    citas.push({nombre, edad, tipo, color, enfermedad});
   
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, '\t'))
}

const leer = () => {
    const display_citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(display_citas);
}

module.exports = { registrar, leer }