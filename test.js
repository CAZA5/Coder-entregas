// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz para leer la entrada de la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pregunta al usuario su nombre
rl.question('¿Cuál es tu nombre? ', (nombre) => {
    // Responde con el nombre ingresado
    console.log(`Hola, ${nombre}!`);

    // Cierra la interfaz
    rl.close();
});
