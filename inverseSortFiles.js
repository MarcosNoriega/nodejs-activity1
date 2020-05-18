const PathFiles = require('./getPath');

const inverseSort = (path) => {
    PathFiles.getPath(path, (files) => {
        files.reverse();

        console.log(`Listado de los Archivos en ${path} orden reverse`);
        for (let path of files) {
            console.log(path);
        }
    });
}

module.exports.inverseSort = inverseSort;