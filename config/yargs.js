const descripcion = {
    demand: true,
    alias: 'd',
    desc: ' Descripcion de tareas por Hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear un tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Crear un tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea sonsera', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}