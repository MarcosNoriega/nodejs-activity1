const PathFiles = require('./getPath');

const countFiles = (path, lyric) => {

    lyric.toLowerCase();
    let count = 0;

    PathFiles.getPath(path, (files) => {
        for (let path of files) {
            path = path.toLowerCase();

            if (path.charAt(0) == lyric) {
                count++;
            }
        }

        console.log(`la cantidad de archivos que comienzan con ${lyric} `, count);
    });
}

module.exports.countFiles = countFiles;