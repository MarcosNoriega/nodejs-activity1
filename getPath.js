const fs = require('fs');

const getPath = (path, cb) => {


    fs.readdir(path, (err, files) => {
        if (err) {
            console.log(err);
        } 
        else {
            cb(files);
        }
    });


}

module.exports.getPath = getPath;