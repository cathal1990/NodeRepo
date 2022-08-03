const fs = require('fs');


let dir = process.cwd();

module.exports = function (file) {
    let path = dir + file;
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        process.exit();
      });
}