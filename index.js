const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);

const comando       = argumentos[0];
const nombre        = argumentos[1];
const edad          = argumentos[2];
const tipo          = argumentos[3];
const color         = argumentos[4];
const enfermedad    = argumentos[5];

if (comando === "registrar") {
  if (
    nombre === undefined ||
    edad === undefined ||
    tipo === undefined ||
    color === undefined ||
    enfermedad === undefined
  ) {
    console.log("Complete todos los campos");
    return;
  } else if (isNaN(edad)) {
    console.log("Ingrese edad en números");
    return;
  }

  registrar(nombre, edad, tipo, color, enfermedad);
} else if (comando === "leer") {
  leer();
} else {
  console.log("Comando ingresado incorrecto");
}
