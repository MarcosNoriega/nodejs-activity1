const Path = require('./getPath');
const InverseSortFiles = require('./inverseSortFiles');
const Count = require('./countFiles');

Path.getPath('./', (files) => {
    console.log("Listado de los Archivos en './'")
    for (let path of files) {
        console.log(path);
    }
});

InverseSortFiles.inverseSort('./');

Count.countFiles('./', 'a');